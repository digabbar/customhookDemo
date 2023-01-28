import { useState, useEffect } from "react";
const useCounter = (text) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === "Backward") {
        setCounter((prevCounter) => prevCounter - 1);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [text]);

  return {
    counter,
  };
};
export default useCounter;
