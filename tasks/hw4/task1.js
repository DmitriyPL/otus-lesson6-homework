export function makeUser(name) {
  return {
    name,
  };
}

/* eslint-disable no-param-reassign */
export function addAgetoUser(user, age) {
  user.age = age;

  return user;
}
/* eslint-disable no-param-reassign */

export function getAdmin(user) {
  const admin = {};
  Object.assign(admin, user);
  admin.role = "admin";

  return admin;
}

// eslint-disable-next-line no-unused-vars
function main() {
  const name = prompt("Enter your name please.");
  const user = makeUser(name);

  const age = prompt("Enter your age please.");
  addAgetoUser(user, age);

  // eslint-disable-next-line no-unused-vars
  const admin = getAdmin(user);
}
