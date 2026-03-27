import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Image as ImageIcon, ListTree } from 'lucide-react';
import { toast } from 'sonner';
import { useConfirmStore } from '../../../store/confirmStore';

export default function CategoryList() {
  const confirmDialog = useConfirmStore();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const response = await window.api.categories.getAll();
      if (response.success && response.data) {
        setCategories(response.data);
      } else {
        toast.error('Erro ao carregar categorias: ' + response.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    confirmDialog.confirm({
      title: 'Excluir Categoria',
      message: 'Tem certeza que deseja remover esta categoria? Produtos vinculados podem ser afetados.',
      confirmText: 'Excluir',
      cancelText: 'Cancelar',
      variant: 'danger',
      onConfirm: async () => {
        const response = await window.api.categories.delete(id);
        if (response.success) {
          toast.success('Categoria removida com sucesso.');
          loadCategories();
        } else {
          toast.error('Erro ao deletar: ' + response.error);
        }
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Categorias</h1>
          <p className="text-gray-500 mt-1">Gerencie os grupos de produtos do seu cardápio</p>
        </div>
        <Link 
          to="/categories/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus size={20} /> Nova Categoria
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Carregando...</div>
        ) : categories.length === 0 ? (
          <div className="p-16 text-center">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ListTree size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma categoria</h3>
            <p className="text-gray-500 mb-6">Você ainda não cadastrou nenhuma categoria.</p>
            <Link 
              to="/categories/new" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Criar primeira categoria
            </Link>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                <th className="px-6 py-4 rounded-tl-2xl">Imagem</th>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Descrição</th>
                <th className="px-6 py-4 text-right rounded-tr-2xl">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.image_path ? (
                      <div className="h-12 w-12 rounded-xl border border-gray-200 overflow-hidden bg-white">
                        <img src={category.image_path.startsWith('http') ? category.image_path : `local://${category.image_path}`} alt={category.name} className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="h-12 w-12 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
                        <ImageIcon size={20} className="text-gray-400" />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-semibold text-gray-900">{category.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 line-clamp-2 max-w-xs">{category.description || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link 
                        to={`/categories/${category.id}`} 
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={18} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(category.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Excluir"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
