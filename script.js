function redirectToPayment(product, price) {
  const url = `payment.html?product=${encodeURIComponent(product)}&price=${price}`;
  window.location.href = url;
}