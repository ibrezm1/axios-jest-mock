// run `node index.js` in the terminal
// Reference
// https://vhudyma-blog.eu/3-ways-to-mock-axios-in-jest/
var { BASE_URL, fetchUsers } = require('./getUsers');

console.log(`Hello Node.js v${process.versions.node}!`);

fetchUsers().then((cat) => {
  console.log(cat.status);
});
