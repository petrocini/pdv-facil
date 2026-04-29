import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EventCalendarProps {
  events: Event[];
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onSelectEvent: (event: Event) => void;
  onSelectDate: (date: Date) => void;
}

export default function EventCalendar({
  events,
  currentDate,
  onDateChange,
  onSelectEvent,
  onSelectDate
}: EventCalendarProps) {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const handlePrevMonth = () => {
    onDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    onDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const days = useMemo(() => {
    const daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }
    return daysArray;
  }, [currentDate, firstDayOfMonth, daysInMonth]);

  const getEventsForDate = (date: Date) => {
    return events.filter(e => {
      const start = new Date(e.start_date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(e.end_date);
      end.setHours(23, 59, 59, 999);
      return date >= start && date <= end;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          {monthNames[currentDate.getMonth()]} <span className="text-gray-400 font-normal">{currentDate.getFullYear()}</span>
        </h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevMonth}
            className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all hover:shadow-sm"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button 
            onClick={() => onDateChange(new Date())}
            className="px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            Hoje
          </button>
          <button 
            onClick={handleNextMonth}
            className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all hover:shadow-sm"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200 flex-1">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
          <div key={day} className="bg-gray-50 py-2 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            {day}
          </div>
        ))}
        
        {days.map((date, i) => {
          if (!date) {
            return <div key={`empty-${i}`} className="bg-gray-50/50 min-h-[100px]" />;
          }

          const isToday = new Date().toDateString() === date.toDateString();
          const dayEvents = getEventsForDate(date);

          return (
            <div 
              key={date.toISOString()}
              onClick={() => onSelectDate(date)}
              className={`bg-white min-h-[100px] p-2 transition-colors cursor-pointer hover:bg-indigo-50/30 group ${
                isToday ? 'bg-indigo-50/10' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${
                  isToday 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-gray-700 group-hover:text-indigo-600'
                }`}>
                  {date.getDate()}
                </span>
              </div>
              
              <div className="space-y-1 mt-1">
                {dayEvents.map(event => {
                  const isActive = new Date() >= new Date(event.start_date) && new Date() <= new Date(event.end_date);
                  return (
                    <div
                      key={event.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectEvent(event);
                      }}
                      className={`text-xs p-1 px-2 rounded font-medium truncate cursor-pointer transition-all hover:scale-[1.02] ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm'
                          : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}
                      title={event.name}
                    >
                      {event.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
