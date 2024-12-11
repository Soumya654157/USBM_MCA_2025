/* eslint-disable no-unused-vars */
import React from "react";

const Counter = () => {
    let count = 0;
    const increment = () => {
        count++;
        alert("it is worked");
    };
    increment();
    increment();
    console.log(count);

    
  return (
    <div>
        <h2> count:{count}</h2>
        <button 
        onClick={increment}
        className="border-2 border-white bg-sky-500 p-2 mt-5 hover:bg-red-500">Increment</button>
    </div>
    
  );
};

export default Counter;
