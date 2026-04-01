import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'sonner';
import { useConfirmStore } from '../../../store/confirmStore';
import CurrencyInput from '../../../components/ui/CurrencyInput';

export default function AddonGroupForm() {
  const confirmDialog = useConfirmStore();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  
  const [addons, setAddons] = useState<any[]>([]);
  const [loadingAddons, setLoadingAddons] = useState(false);
  const [showAddonModal, setShowAddonModal] = useState(false);
  const [currentAddon, setCurrentAddon] = useState({ id: '', name: '', price: 0, image_path: '' });

  useEffect(() => {
    if (id) {
      loadGroup();
      loadAddons();
    }
  }, [id]);

  const loadGroup = async () => {
    try {
      const response = await window.api.addonGroups.getById(id!);
      if (response.success && response.data) {
        setFormData({
          name: response.data.name,
          description: response.data.description || ''
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadAddons = async () => {
    try {
      setLoadingAddons(true);
      const response = await window.api.addons.getAll(id!);
      if (response.success && response.data) {
        setAddons(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingAddons(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        const response = await window.api.addonGroups.update(id, formData);
        if (response.success) {
          toast.success('Grupo atualizado com sucesso!');
        } else {
          toast.error('Erro ao atualizar: ' + response.error);
        }
      } else {
        const response = await window.api.addonGroups.create(formData);
        if (response.success) {
          toast.success('Grupo criado! Agora adicione os itens a ele.');
          navigate(`/addon-groups/${response.data.id}`);
        } else {
          toast.error('Erro ao criar: ' + response.error);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAddon = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!id) return;
      
      const payload = {
        addon_group_id: id,
        name: currentAddon.name,
        price: Number(currentAddon.price),
        image_path: currentAddon.image_path || undefined
      };

      if (currentAddon.id) {
        const response = await window.api.addons.update(currentAddon.id, payload);
        if (!response.success) throw new Error(response.error);
      } else {
        const response = await window.api.addons.create(payload);
        if (!response.success) throw new Error(response.error);
      }
      
      setShowAddonModal(false);
      setCurrentAddon({ id: '', name: '', price: 0, image_path: '' });
      loadAddons();
    } catch (err: any) {
      toast.error('Erro ao salvar adicional: ' + err.message);
    }
  };

  const handleDeleteAddon = (addonId: string) => {
    confirmDialog.confirm({
      title: 'Excluir Adicional',
      message: 'Deseja realmente remover este adicional deste grupo?',
      confirmText: 'Remover',
      cancelText: 'Cancelar',
      variant: 'danger',
      onConfirm: async () => {
        try {
          const response = await window.api.addons.delete(addonId);
          if (response.success) {
            toast.success('Adicional removido com sucesso.');
            loadAddons();
          } else {
            toast.error('Erro ao deletar: ' + response.error);
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  const openAddonModal = (addon?: any) => {
    if (addon) {
      setCurrentAddon({ ...addon });
    } else {
      setCurrentAddon({ id: '', name: '', price: 0, image_path: '' });
    }
    setShowAddonModal(true);
  };

  const handleAddonImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const uploadResp = await window.api.image.upload(file.path);
      if (uploadResp.success) {
        setCurrentAddon(prev => ({ ...prev, image_path: uploadResp.data }));
        toast.success('Imagem enviada com sucesso!');
      } else {
        toast.error('Erro ao enviar imagem: ' + uploadResp.error);
      }
    } catch (err: any) {
      toast.error('Ocorreu um erro ao enviar a imagem.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/addon-groups')}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            {id ? 'Editar Grupo de Adicionais' : 'Novo Grupo'}
          </h1>
          <p className="text-gray-500 mt-1">
            {id ? 'Faça alterações no grupo e gerencie seus itens' : 'Crie um grupo para incluir opções nos seus produtos'}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Nome do Grupo</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="Ex: Escolha sua Carne, Acompanhamentos..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Descrição (Opcional)</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
              placeholder="Ex: Escolha até 2 acompanhamentos inclusos..."
            />
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 transition-transform active:scale-95 shadow-sm disabled:opacity-50"
            >
              {loading ? 'Salvando...' : <><Save size={20} /> Salvar Grupo</>}
            </button>
          </div>
        </form>
      </div>

      {id && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-8">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Itens deste Grupo</h2>
              <p className="text-sm text-gray-500">Adicione os produtos extras que farão parte destas opções.</p>
            </div>
            <button
              onClick={() => openAddonModal()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-colors"
            >
              <Plus size={18} /> Novo Item
            </button>
          </div>

          {loadingAddons ? (
            <div className="text-center text-gray-500 py-8">Carregando itens...</div>
          ) : addons.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <p className="text-gray-500 mb-2">Este grupo não possui itens.</p>
              <button onClick={() => openAddonModal()} className="text-blue-600 font-medium hover:underline">Adicionar primeiro item</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {addons.map(addon => (
                <div key={addon.id} className="border border-gray-100 rounded-xl p-4 flex flex-col hover:border-blue-200 transition-colors bg-gray-50/50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                    <div className="flex gap-1">
                      <button onClick={() => openAddonModal(addon)} className="text-gray-400 hover:text-blue-600 p-1">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDeleteAddon(addon.id)} className="text-gray-400 hover:text-red-600 p-1">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-block bg-emerald-100 text-emerald-800 font-medium px-2 py-1 rounded text-sm">
                      + R$ {Number(addon.price).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {showAddonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-900">{currentAddon.id ? 'Editar Item' : 'Novo Item no Grupo'}</h3>
              <button onClick={() => setShowAddonModal(false)} className="text-gray-400 hover:text-gray-600">×</button>
            </div>
            <form onSubmit={handleSaveAddon} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nome do Adicional</label>
                <input
                  type="text"
                  required
                  value={currentAddon.name}
                  onChange={e => setCurrentAddon({...currentAddon, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Ex: Bacon Extra"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Preço</label>
                <CurrencyInput
                  value={currentAddon.price}
                  onValueChange={(val) => setCurrentAddon({...currentAddon, price: val})}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Imagem do Adicional</label>
                <div className="flex items-center gap-4 mt-2">
                  <div className="h-16 w-16 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 flex-shrink-0 overflow-hidden relative">
                    {currentAddon.image_path ? (
                      <img src={`local://${currentAddon.image_path}`} alt="Preview" className="w-full h-full object-cover bg-white" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    ) : (
                      <span className="text-gray-400 text-[10px] text-center px-1">Sem Imagem</span>
                    )}
                  </div>
                  <div>
                      <label htmlFor="addon_image_upload" className="cursor-pointer bg-white px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors inline-block">
                        Escolher Imagem
                      </label>
                      <input 
                        id="addon_image_upload"
                        type="file" 
                        accept="image/*"
                        onChange={handleAddonImageUpload} 
                        className="hidden" 
                      />
                  </div>
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddonModal(false)}
                  className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-sm"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
