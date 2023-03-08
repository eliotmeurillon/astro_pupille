import { useEffect, useState } from "react";

function Lottery() {
  const [text, setText] = useState("");
  const finalText = "GG 353 837 730";
  const [chars, setChars] = useState(
    Array.from({ length: finalText.length }, () => "")
  );

  useEffect(() => {
    // Random characters
    const randomChars = Array.from({ length: finalText.length }, () =>
      Math.random().toString(36).charAt(2)
    );
    setChars(randomChars);

    // Reveal characters one by one
    let i = 0;
    const intervalId = setInterval(() => {
      setChars((prevChars) =>
        prevChars.map((char, index) => {
          if (index <= i) {
            return finalText.charAt(index);
          } else {
            return prevChars[index];
          }
        })
      );
      i++;
      if (i >= finalText.length) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setText(chars.join(""));
  }, [chars]);

  return <h1 className="text-9xl font-bold text-white ">{text}</h1>;
}

export default Lottery;
