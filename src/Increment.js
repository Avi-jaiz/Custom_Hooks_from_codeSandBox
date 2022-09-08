import useCounter from "./use-Counter";

const Increment = () => {
  const counter = useCounter(true);
  return (
    <>
      <p>{counter}</p>
    </>
  );
};
export default Increment;
