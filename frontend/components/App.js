import React from "react";
import axios from "axios";
import Error from "./Error";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  state = {
    todos: [],
    error: "",
    todoInput: "",
  };

  // AXIOS CALL FUNCTIONS
  fetchAllTodos = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        this.setState({ ...this.state, todos: res.data.data });
      })
      .catch((err) => {
        console.error("GET request timed out with =>", err);
        this.setState({ ...this.state, error: err.response.data.message });
      });
  };

  postNewTodo = () => {
    axios
      .post(URL, { name: this.state.todoInput })
      .then((res) => {
        console.log(res);
        this.fetchAllTodos();
        this.setState({ ...this.state, todoInput: "" });
      })
      .catch((err) => {
        console.error("POST request timed out with =>", err);
        this.setState({ ...this.state, error: err.response.data.message });
      });
  };

  // HELPER FUNCTIONS
  todoInputChange = (e) => {
    const { value } = e.target;
    this.setState({ ...this.state, todoInput: value });
  };

  todoFormSubmit = (e) => {
    e.preventDefault();
    this.postNewTodo();
  };

  // REACT LIFECYCLE
  componentDidMount() {
    console.log("*** App component *** has mounted.");
    this.fetchAllTodos();
  }

  componentDidUpdate() {}

  componentDidCatch() {}

  componentWillUnmount() {}

  render() {
    console.log("*** App component *** fired.");
    return (
      <>
        <Error error={this.state.error} />
        <TodoList todos={this.state.todos} />
        <Form
          todoInput={this.state.todoInput}
          todoInputChange={this.todoInputChange}
          todoFormSubmit={this.todoFormSubmit}
        />
      </>
    );
  }
}
