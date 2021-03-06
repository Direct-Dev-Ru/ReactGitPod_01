/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-labels */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList/TodosList';
import Header from './Header';
import todosService from '../services/todosService';
import { AddTodo } from './AddTodo';

class TodoContainer extends React.Component {
  // datevar = new Date();
  // defaultDaysToDoTask = 3;
  // state = { todos: mockTodos(this.datevar, this.defaultDaysToDoTask) };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      todos: [],
    };
  }

  componentDidMount() {
    todosService
      .getTodos()
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            todos: res.data,
            isLoading: false,
            error: null,
          });
        } else {
          this.setState({
            todos: res.data,
            isLoading: false,
            error: { message: `Server send ${res.status}` },
          });
        }
      })
      .catch((err) => {
        this.setState({
          todos: [],
          isLoading: false,
          error: err,
        });
      });
  }

  handleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  handleDeleted = (id) => {
    // console.log('deleted', id);
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos.filter((todo) => todo.id !== id)],
      };
    });
  };

  addNewTodo = (newTodo) => {
    console.log(newTodo);
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, { ...newTodo, id: uuidv4() }],
      };
    });
  };

  handlers = {
    completed: this.handleCompleted,
    deleted: this.handleDeleted,
    addingNewTodo: this.addNewTodo,
  };

  render() {
    return (
      <>
        <AddTodo handlers={this.handlers} />
        <Header />
        <TodosList
          todos={this.state.todos}
          isLoading={this.state.isLoading}
          handlers={this.handlers}
        />
      </>
    );
  }
}

export default TodoContainer;
