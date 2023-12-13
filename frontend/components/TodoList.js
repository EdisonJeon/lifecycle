import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    console.log("*** TodoList component *** fired.");
    const { todos, toggleComplete, displayCompleted } = this.props;
    return (
      <>
        {todos.reduce((acc, todo) => {
          if (displayCompleted || !todo.completed)
            return acc.concat(
              <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
            );
          else return acc;
        }, [])}
      </>
    );
  }
}
