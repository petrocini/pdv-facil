import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import EventCalendar from './EventCalendar';
import EventDetailPanel from './EventDetailPanel';
import EventForm from './EventForm';
import { toast } from 'sonner';
import { useEventStore } from '../../store/eventStore';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [selectedDateForNew, setSelectedDateForNew] = useState<Date | undefined>(undefined);

  const { loadActiveEvent } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await window.api.events.getAll();
      if (response.success && response.data) {
        setEvents(response.data);
        
        // Update selected event if it exists to get fresh data
        if (selectedEvent) {
          const updated = response.data.find((e: Event) => e.id === selectedEvent.id);
          setSelectedEvent(updated || null);
        }
      } else {
        toast.error(response.error || 'Erro ao carregar eventos');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erro de conexão ao carregar eventos');
    }
  };

  const handleCreateNew = () => {
    setEditingEvent(null);
    setSelectedDateForNew(new Date());
    setIsFormOpen(true);
  };

  const handleSelectDate = (date: Date) => {
    setEditingEvent(null);
    setSelectedDateForNew(date);
    setIsFormOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setSelectedDateForNew(undefined);
    setIsFormOpen(true);
  };

  const handleSuccess = () => {
    fetchEvents();
    loadActiveEvent();
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <CalendarIcon className="text-indigo-600" size={32} />
            Eventos
          </h1>
          <p className="text-gray-500 mt-1">Gerencie os eventos e associe as vendas retroativamente.</p>
        </div>
        <button
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
        >
          <Plus size={20} />
          Novo Evento
        </button>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        <div className="flex-[2] min-w-0">
          <EventCalendar
            events={events}
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            onSelectEvent={setSelectedEvent}
            onSelectDate={handleSelectDate}
          />
        </div>
        
        <div className="w-[400px] flex-shrink-0">
          <EventDetailPanel
            event={selectedEvent}
            onEdit={handleEditEvent}
            onDelete={fetchEvents}
            onClose={() => setSelectedEvent(null)}
          />
        </div>
      </div>

      <EventForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedDate={selectedDateForNew}
        editingEvent={editingEvent}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
