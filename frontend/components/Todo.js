import React from "react";

export default class Todo extends React.Component {
  render() {
    console.log("*** Todo component *** fired.");
    const { todo } = this.props;
    return (
      <>
        <p>{todo.name}</p>
      </>
    );
  }
}
