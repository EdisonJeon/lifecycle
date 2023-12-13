import React from "react";

export default class Form extends React.Component {
  render() {
    console.log("*** Form component *** fired.");
    const {
      displayCompleted,
      todoInput,
      todoInputChange,
      todoFormSubmit,
      toggleDisplayCompleted,
    } = this.props;
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
        </form>
        <button onClick={toggleDisplayCompleted}>
          {displayCompleted ? "Hide" : "Show"} Completed
        </button>
      </>
    );
  }
}
