import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Layers } from 'lucide-react';
import { toast } from 'sonner';
import { useConfirmStore } from '../../../store/confirmStore';

export default function AddonGroupList() {
  const confirmDialog = useConfirmStore();
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    try {
      setLoading(true);
      const response = await window.api.addonGroups.getAll();
      if (response.success && response.data) {
        setGroups(response.data);
      } else {
        toast.error('Erro ao carregar grupos de adicionais: ' + response.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    confirmDialog.confirm({
      title: 'Excluir Grupo',
      message: 'Tem certeza que deseja remover este grupo? Adicionais vinculados e produtos podem ser afetados.',
      confirmText: 'Excluir',
      cancelText: 'Cancelar',
      variant: 'danger',
      onConfirm: async () => {
        const response = await window.api.addonGroups.delete(id);
        if (response.success) {
          toast.success('Grupo removido com sucesso.');
          loadGroups();
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
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Grupos de Adicionais</h1>
          <p className="text-gray-500 mt-1">Gerencie modificadores, complementos e tamanhos para seus produtos</p>
        </div>
        <Link 
          to="/addon-groups/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus size={20} /> Novo Grupo
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Carregando...</div>
        ) : groups.length === 0 ? (
          <div className="p-16 text-center">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum grupo</h3>
            <p className="text-gray-500 mb-6">Você ainda não cadastrou nenhum grupo de adicionais.</p>
            <Link 
              to="/addon-groups/new" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Criar primeiro grupo
            </Link>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-100 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                <th className="px-6 py-4 rounded-tl-2xl">Nome</th>
                <th className="px-6 py-4">Descrição</th>
                <th className="px-6 py-4 text-center">Itens no Grupo</th>
                <th className="px-6 py-4 text-right rounded-tr-2xl">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {groups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50/50 transition-colors group/item">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-semibold text-gray-900">{group.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 line-clamp-2 max-w-xs">{group.description || '-'}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {group.addons?.length || 0} adicionais
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <Link 
                        to={`/addon-groups/${group.id}`} 
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={18} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(group.id)}
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
