console.log("Its working");
//Import modules
const math = require("./math");
const fs = require("fs");

console.log(math.add(5,6));
console.log(math.sub(11,6));
console.log(math.mul(5,6));
console.log(math.div(12,6));

//in-build modules
console.log(fs);
fs.writeFileSync("notes.txt","I am learning Backend \n");
//append:add the string end of the file
fs.appendFileSync("notes.txt","anjan kumar");
//read:
const data = fs.readFileSync("notes.txt");
console.log(data.toString()); 

const fs1 = require('fs');

// Create a new file and write content to it
fs1.writeFileSync('notes2.txt', 'virat Kholi\n');
//console.log('File created successfully!');

//append
// const fs1 = require('fs');

fs1.writeFileSync('notes2.txt', 'This is Rohit\n');
// Read the content of the file
const data1 = fs1.readFileSync('notes2.txt');
console.log(data1);//buffer code 
console.log(data1.toString());

fs1.mkdirSync('viru', { recursive: true });

fs1.renameSync('newFolder', 'deleting folder');


fs1.rmdirSync('deleting folder');



