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
  // Strip any non-digit characters to determine the current mask
  const rawDigits = (value || '').replace(/\D/g, '');
  const isCNPJ = rawDigits.length > 11;
  const format = isCNPJ ? '##.###.###/####-##' : '###.###.###-##';

  return (
    <PatternFormat
      id={id}
      format={format}
      mask="_"
      value={rawDigits}
      onValueChange={(values) => {
        onChange(values.value);
      }}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
