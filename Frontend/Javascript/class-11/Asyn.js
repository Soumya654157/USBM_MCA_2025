//synchronous code

// console.log("start");
// console.log("middle");
// console.log("End");

// //asynchronous code

// console.log("start");
// setTimeout(() => console.log("Middle"), 2000);
// //Execute after 2 seconds
// console.log("End");


//Fetch Api

 fetch("https://jsonplaceholder.typicode.com/users")
 .then((res) => res.json())
 .then((res) => console.log(res))
.catch((error) => console.log("Error", error))

//using async/Await with fetch:
// async function fetchData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);

//     }catch (error){
//         console.log(error);
//     }
// }
// fetchData();//invoke