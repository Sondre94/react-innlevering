import { useContext } from "react";
import { Context } from "../../Context/Context";

export default function Counter() {
  const { count, setCount } = useContext(Context);

  const add = () => {
    setCount((count) => count + 1);
  };
  const subtract = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </>
  );
}
