export function buildWhatsAppOrderMessage(params: {
  phone: string;
  productName: string;
  price: number;
  quantity: number;
  customerName?: string;
  note?: string;
}) {
  const { productName, price, quantity, customerName, note } = params;

  const lines = [
    `Hi Lamdot 👋`,
    `I’d like to order: ${productName}`,
    `Price: ₦${price}`,
    `Quantity: ${quantity}`,
  ];

  if (customerName) lines.push(`Name: ${customerName}`);
  if (note) lines.push(`Note: ${note}`);

  lines.push(`\nPlease confirm availability and total amount.`);

  return {
    message: lines.join("\n"),
  };
}

const DEFAULT_COUNTRY_CODE = "234";

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

/**
 * WhatsApp wa.me expects: countrycode+number (digits only), e.g. 2348052350516
 * If input is missing a country code (e.g. 0805...), we prepend the default.
 */
function normalizeToWhatsAppNumber(
  phone: string,
  countryCode = DEFAULT_COUNTRY_CODE,
) {
  const digits = onlyDigits(phone);

  // If the number already starts with the country code, keep it.
  if (digits.startsWith(countryCode)) return digits;

  // If the number looks like a local mobile number (starts with 0), drop leading 0 and prepend country code.
  // Example: 08052350516 -> 8052350516 -> 2348052350516
  if (digits.startsWith("0")) return countryCode + digits.slice(1);

  // Otherwise, assume it's missing country code; prepend default.
  return countryCode + digits;
}

export function buildWhatsAppLink(params: { phone: string; text: string }) {
  const { phone, text } = params;
  const encodedText = encodeURIComponent(text);
  const normalizedPhone = normalizeToWhatsAppNumber(phone);
  return `https://wa.me/${normalizedPhone}?text=${encodedText}`;
}
