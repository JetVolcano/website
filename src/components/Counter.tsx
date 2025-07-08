import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  if (localStorage.getItem("count") != null) {
    const get_count = parseInt(localStorage.getItem("count")!);
    setCount(get_count);
  }
  localStorage.setItem("count", count().toString());
  const increment = () => {
    setCount(count() + 1);
    localStorage.setItem("count", count().toString());
  };
  const decrement = () => {
    setCount(count() - 1);
    localStorage.setItem("count", count().toString());
  };
  const reset = () => {
    setCount(0);
    localStorage.setItem("count", count().toString());
  };

  return (
    <div>
      <h1>{count()}</h1>
      <div style="display: flex; gap: 6px;">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
