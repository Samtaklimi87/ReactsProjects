import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Sam');
  const [count, setCount] = useState(0);
  const HandleNameChange = () => {
    const names = ["Sam", "Mo", "Mehdi", "Sergio"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int])
  };

  const handleClick = () => {
    setCount(count+1)
    setCount(count+1)
    console.log(count)
  }
  const handleClick2 = (name) => {
    console.log(count)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={HandleNameChange}> Change name </button>
      <button onClick={handleClick}> Click It  </button>
      <button onClick={handleClick2}> Click It  </button>
    </main>
  );
};


export default Content;
