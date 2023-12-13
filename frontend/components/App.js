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
    displayCompleted: true,
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
        this.setState({
          ...this.state,
          todos: this.state.todos.concat(res.data.data),
        });
        this.setState({ ...this.state, todoInput: "", error: "" });
      })
      .catch((err) => {
        console.error("POST request timed out with =>", err);
        this.setState({ ...this.state, error: err.response.data.message });
      });
  };

  toggleComplete = (id) => () => {
    axios
      .patch(`${URL}/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          ...this.state,
          todos: this.state.todos.map((todo) => {
            if (todo.id !== id) return todo;
            else return res.data.data;
          }),
        });
      })
      .catch((err) => {
        console.error("PATCH request timed out with =>", err);
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

  toggleDisplayCompleted = () => {
    this.setState({
      ...this.state,
      displayCompleted: !this.state.displayCompleted,
    });
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
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          displayCompleted={this.state.displayCompleted}
        />
        <Form
          displayCompleted={this.state.displayCompleted}
          todoInput={this.state.todoInput}
          todoInputChange={this.todoInputChange}
          todoFormSubmit={this.todoFormSubmit}
          toggleDisplayCompleted={this.toggleDisplayCompleted}
        />
      </>
    );
  }
}
