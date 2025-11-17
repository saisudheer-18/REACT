import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0
    });
  }

  render() {
    return (
      <div className="counter-card">
        <h2>React Counter App</h2>
        <p className="counter-description">
          This counter helps you track basic increments and decrements.
        </p>

        <div className="count-display">Count: {this.state.count}</div>

        <div className="btn-group">
          <button 
            className="counter-btn increment-btn" 
            onClick={() => this.increment()}
          >
            Increment
          </button>

          <button 
            className="counter-btn decrement-btn" 
            onClick={() => this.decrement()}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
