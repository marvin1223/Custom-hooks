import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const incrementar = (value) => {
    setCounter(counter + value);
  };
  const decrementar = (value) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };
  const resetear = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    incrementar,
    decrementar,
    resetear,
  };
};

export default useCounter;
