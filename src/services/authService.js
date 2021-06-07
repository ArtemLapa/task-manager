const users = [
  {
    id: 1,
    name: "Artem",
    email: "test@gmail.com",
    password: "1234",
  },
];

const authUser = ({ email, password }) =>
  new Promise((resolve, reject) => {
    const user = users.find((_) => _.email === email);
    if (user) {
      if (user.password === password) {
        setTimeout(() => resolve(user), 1000);
      } else {
        setTimeout(() => reject({ error: "Wrong credentials" }), 1000);
      }
    } else {
      setTimeout(() => reject({ error: "User not found" }), 1000);
    }
  });

export { authUser };
