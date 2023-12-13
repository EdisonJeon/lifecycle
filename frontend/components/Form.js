import React from "react";

export default class Form extends React.Component {
  render() {
    console.log("*** Form component *** fired.");
    const { todoInput, todoInputChange, todoFormSubmit } = this.props;
    return (
      <>
        <form onSubmit={todoFormSubmit}>
          <input
            type="text"
            placeholder="Type todo"
            value={todoInput}
            onChange={(e) => todoInputChange(e)}
          />
          <input type="submit" />
          <button>Clear Completed</button>
        </form>
      </>
    );
  }
}
