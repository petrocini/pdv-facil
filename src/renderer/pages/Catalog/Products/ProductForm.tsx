import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2, Link as LinkIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useConfirmStore } from '../../../store/confirmStore';

export default function ProductForm() {
  const confirmDialog = useConfirmStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [categories, setCategories] = useState<any[]>([]);
  const [availableGroups, setAvailableGroups] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    base_price: '',
    category_id: '',
    image_path: ''
  });
  
  const [links, setLinks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategories();
    loadAddonGroups();
    if (isEditing && id) {
      loadProduct(id);
      loadLinks(id);
    }
  }, [id, isEditing]);

  const loadCategories = async () => {
    const response = await window.api.categories.getAll();
    if (response.success && response.data) {
      setCategories(response.data);
    }
  };

  const loadAddonGroups = async () => {
    const response = await window.api.addonGroups.getAll();
    if (response.success && response.data) {
      setAvailableGroups(response.data);
    }
  };

  const loadProduct = async (productId: string) => {
    const response = await window.api.products.getById(productId);
    if (response.success && response.data) {
      setFormData({
        name: response.data.name,
        description: response.data.description || '',
        base_price: response.data.base_price.toString(),
        category_id: response.data.category_id,
        image_path: response.data.image_path || ''
      });
    } else {
      toast.error('Erro ao carregar produto');
      navigate('/products');
    }
  };

  const loadLinks = async (productId: string) => {
    const response = await window.api.productAddonGroups.getByProductId(productId);
    if (response.success && response.data) {
      const formattedLinks = response.data.map((l: any) => ({
        addon_group_id: l.addon_group_id,
        min_selections: l.min_selections,
        max_selections: l.max_selections,
        sort_order: l.sort_order,
        addon_group: l.addon_group
      }));
      setLinks(formattedLinks);
    }
  };

  const handleAddGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const groupId = e.target.value;
    if (!groupId) return;
    
    if (links.some(l => l.addon_group_id === groupId)) {
      toast.warning('Este grupo já foi adicionado a este produto.');
      e.target.value = '';
      return;
    }
    
    const groupToAdd = availableGroups.find(g => g.id === groupId);
    if (!groupToAdd) return;

    const newLink = {
      addon_group_id: groupId,
      min_selections: 0,
      max_selections: 1,
      sort_order: links.length + 1,
      addon_group: groupToAdd
    };

    setLinks([...links, newLink]);
    e.target.value = ''; 
  };

  const handleRemoveLink = (groupId: string) => {
    confirmDialog.confirm({
      title: 'Remover Grupo',
      message: 'Tem certeza que deseja remover este grupo de adicionais do produto?',
      confirmText: 'Remover',
      cancelText: 'Cancelar',
      variant: 'danger',
      onConfirm: () => {
        setLinks(links.filter(l => l.addon_group_id !== groupId));
      }
    });
  };

  const updateLinkOptions = (groupId: string, field: string, value: number) => {
    setLinks(links.map(l => {
      if (l.addon_group_id === groupId) {
        return { ...l, [field]: value };
      }
      return l;
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const uploadResp = await window.api.image.upload(file.path);
      if (uploadResp.success) {
        setFormData(prev => ({ ...prev, image_path: uploadResp.data }));
        toast.success('Imagem enviada com sucesso!');
      } else {
        toast.error('Erro ao enviar imagem: ' + uploadResp.error);
      }
    } catch (err: any) {
      toast.error('Ocorreu um erro ao enviar a imagem.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category_id) {
      toast.warning('Selecione uma categoria');
      return;
    }
    
    for(const link of links) {
      if(link.min_selections > link.max_selections) {
        toast.warning(`O grupo "${link.addon_group?.name || ''}" está com a Seleção Mínima maior que a Máxima.`);
        return;
      }
    }
    
    setLoading(true);

    try {
      let response;
      if (isEditing && id) {
        response = await window.api.products.update(id, formData);
      } else {
        response = await window.api.products.create(formData);
      }

      if (response.success && (isEditing || response.data)) {
        const productId = isEditing ? id! : response.data!.id;
        
        const payload = links.map(l => ({
          addon_group_id: l.addon_group_id,
          min_selections: l.min_selections,
          max_selections: l.max_selections,
          sort_order: l.sort_order
        }));
        
        const linksResponse = await window.api.productAddonGroups.saveLinks(productId, payload);
        
        if (linksResponse.success) {
          toast.success('Produto salvo com sucesso!');
          navigate('/products');
        } else {
          toast.error('Erro ao salvar vínculos de adicionais: ' + linksResponse.error);
        }
      } else {
        toast.error('Erro ao salvar o produto: ' + response.error);
      }
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro ao salvar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/products" className="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 shadow-sm">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{isEditing ? 'Editar Produto' : 'Novo Produto'}</h1>
          <p className="text-gray-500 mt-1">Preencha os dados abaixo para {isEditing ? 'atualizar o' : 'criar um novo'} produto.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
               Dados Básicos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto *</label>
                <input 
                  id="name"
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Ex: X-Bacon, Coca-Cola..." 
                  required 
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                <textarea 
                  id="description"
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" 
                  placeholder="Ingredientes ou detalhes do produto..."
                />
              </div>

              <div>
                <label htmlFor="category_id" className="block text-sm font-medium text-gray-700 mb-1">Categoria *</label>
                <select 
                  id="category_id"
                  name="category_id" 
                  value={formData.category_id} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none" 
                  required
                >
                  <option value="" disabled>Selecione uma categoria...</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="base_price" className="block text-sm font-medium text-gray-700 mb-1">Preço Base (R$) *</label>
                <input 
                  id="base_price"
                  name="base_price" 
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.base_price} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="0.00" 
                  required 
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Imagem do Produto</label>
                <div className="flex items-center gap-4 mt-2">
                  <div className="h-24 w-24 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 flex-shrink-0 overflow-hidden relative">
                    {formData.image_path ? (
                      <img src={`local://${formData.image_path}`} alt="Preview" className="w-full h-full object-cover bg-white" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    ) : (
                      <span className="text-gray-400 text-xs text-center px-1">Sem Imagem</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                      <label htmlFor="image_upload" className="cursor-pointer bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors inline-flex items-center gap-2 max-w-max">
                        Escolher Imagem
                      </label>
                      <input 
                        id="image_upload"
                        type="file" 
                        accept="image/*"
                        onChange={handleImageUpload} 
                        className="hidden" 
                      />
                      <span className="text-xs text-gray-500">Formato recomendado: PNG, JPG, WEBP.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
               Grupos de Adicionais
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Vincule complementos a este produto. Ex: "Escolha seu molho", "Adicionais Extras".
            </p>

            <div className="w-full max-w-sm relative mb-6">
              <select 
                defaultValue=""
                onChange={handleAddGroup}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 appearance-none font-medium text-gray-700"
              >
                <option value="" disabled>+ Adicionar Grupo de Adicionais</option>
                {availableGroups.map(g => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Plus size={20} />
              </div>
            </div>

            {links.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <div className="mx-auto w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <LinkIcon size={20} className="text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium text-sm">Nenhum grupo vinculado.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[...links].sort((a,b) => a.sort_order - b.sort_order).map((link) => (
                  <div key={link.addon_group_id} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors bg-white shadow-sm flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        {link.addon_group?.name}
                        {link.min_selections > 0 && (
                          <span className="bg-orange-100 text-orange-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Obrigatório</span>
                        )}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{link.addon_group?.addons?.length || 0} Itens cadastrados</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 bg-gray-50 p-2 md:p-1 rounded-xl border border-gray-200 w-full md:w-auto">
                      <div className="flex flex-col items-center px-3 py-1 border-r border-gray-200 last:border-0">
                        <label className="text-[10px] uppercase font-bold text-gray-500 mb-1">Mínimo</label>
                        <input 
                          type="number" 
                          min="0"
                          className="w-14 bg-white border border-gray-300 rounded text-center px-1 py-1 text-sm font-semibold focus:ring-1 focus:ring-blue-500"
                          value={link.min_selections}
                          onChange={e => updateLinkOptions(link.addon_group_id, 'min_selections', Number(e.target.value))}
                        />
                      </div>
                      
                      <div className="flex flex-col items-center px-3 py-1 border-r border-gray-200 last:border-0">
                        <label className="text-[10px] uppercase font-bold text-gray-500 mb-1">Máximo</label>
                        <input 
                          type="number" 
                          min="1"
                          className="w-14 bg-white border border-gray-300 rounded text-center px-1 py-1 text-sm font-semibold focus:ring-1 focus:ring-blue-500"
                          value={link.max_selections}
                          onChange={e => updateLinkOptions(link.addon_group_id, 'max_selections', Number(e.target.value))}
                        />
                      </div>

                      <div className="flex flex-col items-center px-3 py-1 border-r border-gray-200 last:border-0">
                        <label className="text-[10px] uppercase font-bold text-gray-500 mb-1">Ordem</label>
                        <input 
                          type="number" 
                          className="w-14 bg-white border border-gray-300 rounded text-center px-1 py-1 text-sm font-semibold focus:ring-1 focus:ring-blue-500"
                          value={link.sort_order}
                          onChange={e => updateLinkOptions(link.addon_group_id, 'sort_order', Number(e.target.value))}
                        />
                      </div>

                      <div className="px-2">
                        <button 
                          type="button"
                          onClick={() => handleRemoveLink(link.addon_group_id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Desvincular Grupo"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
            <Link to="/products" className="px-6 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition-colors">
              Cancelar
            </Link>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Salvando...' : <><Save size={20} /> Salvar Produto</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
