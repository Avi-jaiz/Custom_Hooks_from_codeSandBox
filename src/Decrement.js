import useCounter from "./use-Counter.js";

const Decrement = () => {
  const counter = useCounter(false);
  return (
    <>
      <p>{counter}</p>
    </>
  );
};
export default Decrement;
