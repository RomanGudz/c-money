const transactionsYears = (data) => {
  const years = data.map(item => {
    const year = new Date(item.date).getFullYear();
    return year;
  });
  return [...new Set(years)];
};

export default transactionsYears;
