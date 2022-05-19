import React from 'react';

export default class ClassCounter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  decrement() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        CounterClass
        <h1>{count}</h1>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}
