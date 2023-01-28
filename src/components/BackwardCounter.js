import useCounter from "../hooks/use-Counter";

import Card from "./Card";

const BackwardCounter = () => {
  const { counter } = useCounter("Backward");
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
