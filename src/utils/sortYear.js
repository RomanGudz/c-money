const sortYear = (date) => {
  console.log('date: ', date);
  const year = date.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Получаем годы из дат
    const yearA = dateA.getFullYear();
    const yearB = dateB.getFullYear();
    console.log(yearA - yearB);
    return yearA - yearB;
  });

  console.log(year);

  return year;
};

export default sortYear;
