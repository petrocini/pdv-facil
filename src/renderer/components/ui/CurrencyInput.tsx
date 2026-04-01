import React from 'react';
import { NumericFormat, type NumberFormatValues } from 'react-number-format';

interface CurrencyInputProps {
  id?: string;
  value: number | string;
  onValueChange: (floatValue: number) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * Masked currency input for Brazilian Real (BRL).
 * Displays values as "R$ 1.250,50" and returns a clean float (1250.50) via onValueChange.
 * Uses right-to-left filling, ideal for POS workflows.
 */
export default function CurrencyInput({
  id,
  value,
  onValueChange,
  className = '',
  placeholder = 'R$ 0,00',
  required = false,
  disabled = false,
}: CurrencyInputProps) {
  const handleChange = (values: NumberFormatValues) => {
    onValueChange(values.floatValue ?? 0);
  };

  return (
    <NumericFormat
      id={id}
      value={value === 0 ? '' : value}
      onValueChange={handleChange}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      className={className}
      allowEmptyFormatting={true}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      inputMode="numeric"
    />
  );
}
