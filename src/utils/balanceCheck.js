const yearMonths = ['Янв', 'Фев', 'Мар', 'Апр',
  'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

const transfersMonth = (arr, month, id) => {
  const transfers = arr.filter(item => new Date(item.date).
    getMonth() === yearMonths.indexOf(month));

  const totalBalance = transfers.reduce((total, item) => {
    if (item.to === id) {
      return total + item.amount;
    } else if (item.from === id) {
      return total - item.amount;
    }
    return total;
  }, 0);

  return totalBalance.toFixed(2);
};

const sortMoths = (arr) => {
  const months = [...new Set(arr.map(item =>
    yearMonths[new Date(item.date).getMonth()]))];

  return months;
};

const balanceCheck = (transfers, id) => {
  const months = sortMoths(transfers);

  const balancesByMonth = months.map(item => ({
    month: item,
    balance: transfersMonth(transfers, item, id)
  }));
  if (balancesByMonth.length > 6) {
    return [balancesByMonth.slice(2), months.slice(2)];
  }

  return [balancesByMonth, months];
};

export default balanceCheck;
