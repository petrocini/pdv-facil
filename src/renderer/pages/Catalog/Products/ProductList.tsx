import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Trash2, Package, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useConfirmStore } from '../../../store/confirmStore';

export default function ProductList() {
  const confirmDialog = useConfirmStore();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await window.api.products.getAll();
      if (response.success && response.data) {
        setProducts(response.data);
      } else {
        toast.error('Erro ao carregar produtos: ' + response.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    confirmDialog.confirm({
      title: 'Excluir Produto',
      message: 'Tem certeza que deseja remover este produto? Esta ação não pode ser desfeita e removerá os vínculos de adicionais.',
      confirmText: 'Excluir',
      cancelText: 'Cancelar',
      variant: 'danger',
      onConfirm: async () => {
        const response = await window.api.products.delete(id);
        if (response.success) {
          toast.success('Produto removido com sucesso.');
          loadProducts();
        } else {
          toast.error('Erro ao deletar: ' + response.error);
        }
      }
    });
  };

  const handleClone = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    confirmDialog.confirm({
      title: 'Clonar Produto',
      message: `Deseja criar uma cópia de "${product.name}"? A categoria, imagem e grupos de adicionais serão copiados.`,
      confirmText: 'Clonar',
      cancelText: 'Cancelar',
      variant: 'clone',
      onConfirm: async () => {
        const response = await window.api.products.clone(product.id);
        if (response.success) {
          toast.success(`Produto "${response.data?.name}" criado com sucesso!`);
          loadProducts();
        } else {
          toast.error('Erro ao clonar produto: ' + response.error);
        }
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Produtos</h1>
          <p className="text-gray-500 mt-1">Gerencie os itens do seu cardápio</p>
        </div>
        <Link 
          to="/products/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus size={20} /> Novo Produto
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Carregando...</div>
        ) : products.length === 0 ? (
          <div className="p-16 text-center">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum produto</h3>
            <p className="text-gray-500 mb-6">Você ainda não cadastrou nenhum produto.</p>
            <Link 
              to="/products/new" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Criar primeiro produto
            </Link>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                <th className="px-6 py-4 rounded-tl-2xl">Produto</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Preço Base</th>
                <th className="px-6 py-4 text-right rounded-tr-2xl">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                  title="Clique para editar"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {product.image_path ? (
                        <div className="h-10 w-10 rounded-lg border border-gray-200 overflow-hidden flex-shrink-0 bg-white shadow-sm">
                          <img src={product.image_path.startsWith('http') ? product.image_path : `local://${product.image_path}`} alt={product.name} className="h-full w-full object-cover" />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Package size={18} className="text-gray-400" />
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{product.name}</div>
                        <div className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">{product.description || '-'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium border border-blue-100">
                      {product.category?.name || '-'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-semibold text-emerald-600">
                      R$ {Number(product.base_price).toFixed(2).replace('.', ',')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={(e) => handleClone(e, product)}
                        className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                        title="Clonar Produto"
                      >
                        <Copy size={18} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}
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
