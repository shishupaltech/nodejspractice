// npm - global command, comes with node 
// npm -- version
// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependeny -use it in any project
// npm install -g <packageName>
// sudo npm install -g <PackageName> (mac)

//package.json - manifest file (stores important info about the project/package)
// manual approach (create package.json in the root, create properties etc);
// npm init -yield(everyting default)

const _ = require('lodash');
const items = [1,[2,[3],[4]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);