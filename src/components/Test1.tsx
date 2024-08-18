// Replicate the below class component functionality in a hook component
// - 'number' initialized to 0 in state, and updated to a random number between 0-9 on first mount
// - When the state 'number' updates, compare the new value to the previous value
// - console.log the result of the comparison ex. A > B or A < B

// 1. Complete HookComponent to match ClassComponent functionality

import React from "react";

const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const HookComponent = () => null;

class ClassComponent extends React.Component {
  state = {
    number: 0
  };

  componentDidUpdate(prevProps: {}, prevState: { number: number }) {
    if (this.state.number !== prevState.number) {
      const operator = this.state.number > prevState.number ? " > " : " < ";
      console.log(this.state.number + operator + prevState.number);
    }
  }

  componentDidMount() {
    this.setState({
      number: Math.floor(Math.random() * 10)
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.number}</h3>
        {numbersArray.map((number) => {
          return (
            <button key={number} onClick={() => this.setState({ number })}>
              {number}
            </button>
          );
        })}
      </div>
    );
  }
}

const Test1 = () => {
  return (
    <div
      style={{
        margin: "0 auto"
      }}
    >
      <ClassComponent />
      <HookComponent />
    </div>
  );
};

Test1.displayName = "Test 1";
export default Test1;
