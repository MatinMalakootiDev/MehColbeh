export const formatCurrency = (value) =>
  new Intl.NumberFormat('fa-IR').format(value / 10) + ' تومان';
