import React from 'react';
import './counter.css';

class Counter extends React.Component {
  counter;

  constructor(props) {
    super(props);
    this.state = { counter: +props.counter };
  }

  increaseValue = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decreaseValue = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div className='counter'>
        <h3>Counter: {this.state.counter} </h3>
        <div className='counter__buttons'>
          <button onClick={this.increaseValue}>increment</button>
          <button onClick={this.decreaseValue}>decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter;