// When clicking the (+) button, the ui count is not updated.

// 1) Resolve the problem.
// Note: Please keep state as an object of type IState.
//   interface IState {
//    title: string;
//    count: number;
//   }

// 2) Can you describe in a why the problem happened and why your solution fixes it?

import { useState } from "react";

const Test2 = () => {
  const [state, setState] = useState<IState>({ title: "Counter", count: 0 });

  const incrementCount = () =>
    setState((prevState) => {
      prevState.count = prevState.count + 1;
      return prevState;
    });

  return (
    <div>
      <h1>{state.title}</h1>
      <h1>{state.count}</h1>
      <button style={{ padding: "10px 50px" }} onClick={incrementCount}>
        +
      </button>
    </div>
  );
};

interface IState {
  title: string;
  count: number;
}

Test2.displayName = "Test2";
export default Test2;
