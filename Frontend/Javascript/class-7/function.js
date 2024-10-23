//write a function to print your name'

// function printName(){
//     console.log("soumya");
// }
// printName();//invoke or cell

// function printName(name){//parameter
//     console.log(`my name is ${name}`);
// }
// printName("soumya");//argument


// function printName(name){//parameter
//     console.log(`my name is ${name}`);
//     function printAge(age){//parameter
//         console.log(`my age is ${age}`);
//         function printCity(city){//parameter
//             console.log(`my city is ${city}`);
//         }
//     }
// }
// printName("soumya");//argument
// prinAge("21");
// printCity("bhadrak");


// function printName(name){//parameter
//     console.log(`my name is ${name}`);
// }
// printName("soumya");//argument

//return keyword
//stop the execution process
//return the value to the caller

// function printName(name,age,city){//parameter
//     return ` my name is ${name},${age},${city}`;

// }
// console.log(printName("soumya",21,"bhadrak"));
// let output=printName("soumya",21,"bhadrak");
// console.log(output);
// console.log(printName("soumya"));
// const printName=(name)=>{//=>:-fat arrow
//     return `my name is ${name}`;
// }
// console.log(printName("soumya"));


// Simple Calculator using function and swith statement
// const calculator = (operation,num1,num2) => {
//     switch (operation){
//           case "+":
//               return num1 + num2;
//               break;
//           case "-":
//               return num1 - num2;
//               break;
//           case "*":
//               return num1 * num2;
//               break;
//           case "/":
//               return num1 / num2;
//               break;
              
//           default:
//               return "Invalid operation";
//               break;    
//     }
//   };
  
//   const output = calculator ("+",10,9);
//   console.log(output);




  const autentication = (enteredData, callback) => {
    return callback(enteredData);
}
const verify = (userData) => {
    let user = "user";
    let admin = "admin"
    if(userData === user){
        return "he is a user";
    }else if (userData === admin) {
        return "he is a admin";
    }else {
        return "not a authorized persone";
    }
}
console.log(autentication("soumya", verify));