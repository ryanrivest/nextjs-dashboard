export const formatCurrency = (value: number) => {
  return Math.round(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatNumber = (value: number) => {
  return value.toLocaleString('en-US');
};

export const formatPercent = (value: number) => {
  return `${value}%`;
};

export const formatInteger = (value: number) => {
  return Math.round(value).toString();
};
