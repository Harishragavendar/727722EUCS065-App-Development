const users = [];

export const registerUser = (user) => {
  users.push(user);
};

export const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

export const verifyUser = (email, password) => {
  const user = findUserByEmail(email);
  return user && user.password === password;
};
