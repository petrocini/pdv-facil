import React from 'react';
import { PatternFormat } from 'react-number-format';

interface DocumentInputProps {
  id?: string;
  value: string;
  onChange: (rawValue: string) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

/**
 * Masked input for Brazilian documents (CPF / CNPJ).
 * Dynamically switches between CPF (###.###.###-##) and CNPJ (##.###.###/####-##)
 * based on the number of digits entered.
 * Returns only raw digits via onChange (e.g. "12345678901").
 */
export default function DocumentInput({
  id,
  value,
  onChange,
  className = '',
  placeholder = '000.000.000-00',
  disabled = false,
}: DocumentInputProps) {
  
  const applyMask = (v: string) => {
    let raw = v.replace(/\D/g, '');
    if (raw.length <= 11) {
      raw = raw.replace(/(\d{3})(\d)/, '$1.$2');
      raw = raw.replace(/(\d{3})(\d)/, '$1.$2');
      raw = raw.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      return raw;
    } else {
      // CNPJ limit to 14 digits
      raw = raw.substring(0, 14);
      raw = raw.replace(/^(\d{2})(\d)/, '$1.$2');
      raw = raw.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
      raw = raw.replace(/\.(\d{3})(\d)/, '.$1/$2');
      raw = raw.replace(/(\d{4})(\d)/, '$1-$2');
      return raw;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '').substring(0, 14);
    onChange(rawValue);
  };

  return (
    <input
      id={id}
      value={applyMask(value || '')}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={18} // 14 numbers + 4 formatting symbols
    />
  );
}
