import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function CategoryForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_path: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing && id) {
      loadCategory(id);
    }
  }, [id, isEditing]);

  const loadCategory = async (categoryId: string) => {
    const response = await window.api.categories.getById(categoryId);
    if (response.success && response.data) {
      setFormData({
        name: response.data.name,
        description: response.data.description || '',
        image_path: response.data.image_path || ''
      });
    } else {
      toast.error('Erro ao carregar categoria');
      navigate('/categories');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setLoading(true);

    try {
      let response;
      if (isEditing && id) {
        response = await window.api.categories.update(id, formData);
      } else {
        response = await window.api.categories.create(formData);
      }

      if (response.success) {
        toast.success(isEditing ? 'Categoria atualizada!' : 'Categoria criada com sucesso!');
        navigate('/categories');
      } else {
        toast.error('Erro ao salvar: ' + response.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/categories" className="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 shadow-sm">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{isEditing ? 'Editar Categoria' : 'Nova Categoria'}</h1>
          <p className="text-gray-500 mt-1">Preencha os dados abaixo para {isEditing ? 'atualizar a' : 'criar uma nova'} categoria.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome da Categoria *</label>
              <input 
                id="name"
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                placeholder="Ex: Bebidas, Lanches..." 
                required 
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
              <textarea 
                id="description"
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" 
                placeholder="Ex: Todas as opções de bebidas geladas..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Imagem da Categoria</label>
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

          <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
            <Link to="/categories" className="px-6 py-2.5 text-gray-600 font-medium hover:bg-gray-50 rounded-xl transition-colors">
              Cancelar
            </Link>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Salvando...' : <><Save size={20} /> Salvar Categoria</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
