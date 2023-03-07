import React from "react";

function RandomGenerator() {
  const generateRandomText = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = "";
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      text += letters[randomIndex];
    }
    const randomNum = Math.floor(Math.random() * 900000000) + 100000000;
    const formattedNum = randomNum
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `${text} ${formattedNum}`;
  };

  return <h2 class="text-white text-4xl">{generateRandomText()}</h2>;
}

export default RandomGenerator;
