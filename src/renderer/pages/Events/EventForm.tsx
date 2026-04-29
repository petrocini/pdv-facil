import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X, Calendar as CalendarIcon, MapPin, AlignLeft } from 'lucide-react';
import { toast } from 'sonner';

interface EventFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate?: Date;
  editingEvent?: Event | null;
  onSuccess: () => void;
}

interface EventFormData {
  name: string;
  city: string;
  state: string;
  start_date: string;
  end_date: string;
  notes: string;
}

export default function EventForm({ isOpen, onClose, selectedDate, editingEvent, onSuccess }: EventFormProps) {
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<EventFormData>();

  useEffect(() => {
    if (isOpen) {
      if (editingEvent) {
        setValue('name', editingEvent.name);
        setValue('city', editingEvent.city);
        setValue('state', editingEvent.state || 'SP');
        setValue('start_date', new Date(editingEvent.start_date).toISOString().slice(0, 16));
        setValue('end_date', new Date(editingEvent.end_date).toISOString().slice(0, 16));
        setValue('notes', editingEvent.notes || '');
      } else {
        reset();
        setValue('state', 'SP');
        if (selectedDate) {
          const now = new Date();
          const start = new Date(selectedDate);
          
          // Se for o mesmo dia (hoje), usa a hora exata. Se for outro dia (calendário), 
          // usa a hora atual no dia selecionado.
          start.setHours(now.getHours(), now.getMinutes(), 0, 0);
          
          const tzOffset = start.getTimezoneOffset() * 60000;
          const localStartISO = new Date(start.getTime() - tzOffset).toISOString().slice(0, 16);
          setValue('start_date', localStartISO);
          
          const end = new Date(selectedDate);
          end.setHours(23, 59, 0, 0);
          const localEndISO = new Date(end.getTime() - end.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
          setValue('end_date', localEndISO);
        }
      }
    }
  }, [isOpen, editingEvent, selectedDate, setValue, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: EventFormData) => {
    try {
      const payload = {
        ...data,
        start_date: new Date(data.start_date).toISOString(),
        end_date: new Date(data.end_date).toISOString(),
      };

      let response;
      if (editingEvent) {
        response = await window.api.events.update(editingEvent.id, payload);
      } else {
        response = await window.api.events.create(payload);
      }

      if (response.success) {
        const linked = response.data?.linkedCount || 0;
        toast.success(
          editingEvent 
            ? `Evento atualizado! ${linked} pedidos vinculados.` 
            : `Evento criado! ✅ ${linked} pedidos foram associados a este evento.`
        );
        onSuccess();
        onClose();
      } else {
        toast.error(response.error || 'Erro ao salvar evento');
      }
    } catch (error: any) {
      toast.error(error.message || 'Erro inesperado');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CalendarIcon />
            {editingEvent ? 'Editar Evento' : 'Novo Evento'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nome do Evento</label>
            <input
              {...register('name', { required: 'Nome é obrigatório' })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="Ex: Festa Junina 2026"
            />
            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
                <MapPin size={16} /> Cidade
              </label>
              <input
                {...register('city', { required: 'Cidade é obrigatória' })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="Ex: Franca"
              />
              {errors.city && <span className="text-red-500 text-xs mt-1 block">{errors.city.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">UF</label>
              <input
                {...register('state', { maxLength: 2 })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all uppercase"
                placeholder="SP"
                maxLength={2}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Início</label>
              <input
                type="datetime-local"
                {...register('start_date', { required: 'Data de início é obrigatória' })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Término</label>
              <input
                type="datetime-local"
                {...register('end_date', { required: 'Data de término é obrigatória' })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
              <AlignLeft size={16} /> Observações
            </label>
            <textarea
              {...register('notes')}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
              rows={3}
              placeholder="Anotações opcionais sobre o evento..."
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Salvando...' : 'Salvar Evento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
