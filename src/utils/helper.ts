export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("fa", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return `${formatter.format(value)} تومان`;
}
