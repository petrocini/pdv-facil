/**
 * Formats a numeric value as Brazilian Real (BRL) currency string.
 * Example: 1250.5 -> "R$ 1.250,50"
 */
export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

/**
 * Strips all non-digit characters from a document string.
 * Example: "123.456.789-01" -> "12345678901"
 */
export function sanitizeDocument(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Formats a raw digit string as CPF or CNPJ.
 * Example: "12345678901" -> "123.456.789-01"
 * Example: "12345678000190" -> "12.345.678/0001-90"
 */
export function formatDocument(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (digits.length <= 11) {
    return digits
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  return digits
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
}
