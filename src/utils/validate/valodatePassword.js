const validatePassword = (password) => {
  const validCharacters = /^[a-zA-Z0-9]+$/.test(password);
  const validLength = password.length >= 6;
  return validCharacters && validLength;
};

export default validatePassword;
