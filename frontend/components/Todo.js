import React from "react";

export default class Todo extends React.Component {
  render() {
    console.log("*** Todo component *** fired.");
    const { todo, toggleComplete } = this.props;
    return (
      <>
        <p onClick={toggleComplete(todo.id)}>
          {todo.name}
          {todo.completed ? " ✔️" : ""}
        </p>
      </>
    );
  }
}
