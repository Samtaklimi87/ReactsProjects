import React from "react";

const Content = () => {
  const HandleNameChange = () => {
    const names = ["Sam", "Mo", "Mehdi", "Sergio"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return (
    <main>
      <p>
        Hello {HandleNameChange()}
      </p>
    </main>
  );
};

export default Content;
