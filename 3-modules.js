// Modules -> Encapsulated Code(only share minumum);
// COMMONJS , EVERY FILE IS MODULE(BY DEFAULT);


const name = require('./4.name');
const sayHie = require('./5.utils');

const data = require('./6-alternative-flavour');
// console.log(data);
require('./7-mind-graned');
console.log(name);
sayHie('suman');
sayHie(name.name);
sayHie(name.peter);



// const os = require('os');

// // info about current user 

// // const user = os.userInfo();
// // console.log(os);
// // console.log(user);

// // const currentOs = {
// //     name:os.type(),
// //     release:os.release(),
// //     totalMem:os.totalmem(),
// //     freeMem:os.freemem(),
// // }

// // console.log(currentOs);
// // method returns the system uptime in seconds 

// console.log(`The system Uptime is ${os.uptime} seconds`);
