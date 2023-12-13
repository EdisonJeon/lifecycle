import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    console.log("*** TodoList component *** fired.");
    const { todos } = this.props;
    return (
      <>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </>
    );
  }
}
