export const WHATSAPP_PHONE = "0000000000";

export const NAIRA_SYMBOL = "₦";

export function formatNaira(value: number) {
  // Keep it simple: show as whole naira with thousands separators.
  // If you later want decimals, this can be enhanced.
  return new Intl.NumberFormat("en-NG", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);
}
