const errorProcessing = (error) => {
  if (error === 'Overdraft prevented') {
    return 'Сумма для перевода больше чем есть на счете';
  }
  if (error === 'Invalid amount') {
    return 'Не указана сумма перевода, или она отрицательная';
  }
  if (error === 'Invalid account from') {
    return 'Этот счёт не принадлежит вам';
  }
  if (error === 'Invalid account to') {
    return 'Этого счёта не существует';
  }
  if (error === 'Not enough currency') {
    return 'На валютном счёте списания нет средств';
  }
  if (error === 'Unknown currency code') {
    return 'Передан неверный валютный код, код не поддерживается системой ';
  }
};

export default errorProcessing;
