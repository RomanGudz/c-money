/* eslint-disable indent */
const sortByYear = (date, y) => {
  const sortTransactions = date.filter(item =>
    new Date(item.date).getFullYear() ===
    new Date(y, 1, 0).getFullYear()
  );

  return sortTransactions;
};

export default sortByYear;
