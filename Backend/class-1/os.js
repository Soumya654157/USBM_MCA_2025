//import module
const os = require("os");

console.log(os);
console.log(os.homedir());//c:\users\jsoum
console.log(os.hostname());//DESKTOP-JB47NQB
console.log(os.platform());//win32
console.log(os.release());//10.026100
console.log(os.userInfo()); //uid: -1,username: 'jsoum',homedir: 'C:\\Users\\jsoum',shell: null


//const os = require('os');
const totalMemory = os.totalmem();
console.log('Total memory (in bytes):', totalMemory);

