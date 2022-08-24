// npm - global command, comes with node
// npm --version

// local dependecy - use it only in this particular project
// npm install <packageName>
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)
// less and less need for global installation with npx

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const flat_items = _.flattenDeep(items);

console.log(flat_items);
console.log('hello people');