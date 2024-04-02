export const formatCurrency = (value: number) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatNumber = (value: number, fractionDigits: number = 0) => {
  if (fractionDigits === 0) {
    return Math.round(value).toLocaleString('en-US');
  }

  return value.toLocaleString('en-US');
};

export const formatPercent = (value: number) => {
  return `${value * 100}%`;
};

export const formatInteger = (value: number) => {
  return Math.round(value).toString();
};
