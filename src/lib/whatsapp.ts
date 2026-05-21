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

export function buildWhatsAppLink(params: {
  phone: string;
  text: string;
}) {
  const { phone, text } = params;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

