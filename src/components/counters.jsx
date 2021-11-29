import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    const { counters, onDeleteAll, onDelete, onIncrement, onDecrement, onAdd, onReset } = this.props;
    return (
      <div>
        <button onClick={onDeleteAll} className="btn btn-primary btn-sm m-2">
          Delete All
        </button>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add New
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReset = {onReset}
            onDecrement = {onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
