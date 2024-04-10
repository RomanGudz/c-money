const validateLogin = (login) => {
  const startsWithLetter = /^[a-zA-Z]/.test(login);
  const validCharacters = /^[a-zA-Z0-9]+$/.test(login);
  const validLength = login.length >= 6;
  return startsWithLetter && validCharacters && validLength;
};

export default validateLogin;
