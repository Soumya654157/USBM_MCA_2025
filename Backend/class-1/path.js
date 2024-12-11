//import module
const path = require("path");
console.log(path);


const rootDir = path.resolve(__dirname,"../");
console.log(rootDir);

//adding paths
console.log(path.join("class-1","path.js"));//class-1\path.js
// console.log(path.bsename());
// console.log(path.extnme());