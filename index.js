// run `node index.js` in the terminal
var { BASE_URL, fetchUsers } = require('./getUsers');

console.log(`Hello Node.js v${process.versions.node}!`);

fetchUsers().then((cat) => {
  console.log(cat.status);
});
