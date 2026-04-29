import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ptBR } from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

registerLocale('pt-BR', ptBR);

interface DateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function DateTimePicker({ value, onChange, placeholder }: DateTimePickerProps) {
  // Converte a string "YYYY-MM-DDTHH:mm" (formato padrao do state anterior) para Date
  const selectedDate = value ? new Date(value) : null;

  const handleChange = (date: Date | null) => {
    if (date) {
      // Ajusta o timezone para gerar uma string local limpa "YYYY-MM-DDTHH:mm"
      const tzOffset = date.getTimezoneOffset() * 60000;
      const localISOTime = new Date(date.getTime() - tzOffset).toISOString().slice(0, 16);
      onChange(localISOTime);
    } else {
      onChange('');
    }
  };

  return (
    <div className="relative w-full h-full flex items-center">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Hora"
        dateFormat="dd/MM/yyyy HH:mm"
        locale="pt-BR"
        placeholderText={placeholder || "dd/mm/aaaa --:--"}
        className="w-full h-full bg-transparent border-none text-slate-700 text-sm font-medium focus:ring-0 outline-none pr-8 cursor-text"
        isClearable
        portalId="datepicker-portal"
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between px-2 py-1">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} type="button" className="p-1 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
              <ChevronLeft size={18} />
            </button>
            <span className="font-bold text-slate-700 capitalize text-sm">
              {format(date, 'MMMM yyyy', { locale: ptBR })}
            </span>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} type="button" className="p-1 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-indigo-400 mr-2">
        <Calendar size={16} />
      </div>
    </div>
  );
}
