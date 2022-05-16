export function makeUser(name) {
  return {
    name,
  };
}

export function addAgetoUser(user, age) {
  user.age = age;

  return user;
}

export function getAdmin(user) {
  const admin = {};
  Object.assign(admin, user);
  admin.role = 'admin';

  return admin;
}

function main() {
  const name = prompt('Enter your name please.');
  const user = makeUser(name);

  const age = prompt('Enter your age please.');
  addAgetoUser(user, age);

  const admin = getAdmin(user);
}
