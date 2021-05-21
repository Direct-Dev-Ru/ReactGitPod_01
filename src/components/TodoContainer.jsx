/* eslint-disable no-labels */
import React from 'react';
import TodosList from './TodosList';
import { mockTodos } from '../data/mockData';
import Header from './Header.jsx';

class TodoContainer extends React.Component {
  datevar = new Date();
  defaultDaysToDoTask = 3;
  state = { todos: mockTodos(this.datevar, this.defaultDaysToDoTask) };

  handleCompleted = (id) => {
    // this.setState((prevState, prevProps) => {
    //     const newTodos = [...prevState.todos]
    //     const candidate = newTodos.find((todo) => {
    //         return todo.id === id
    //     })

    //     if (candidate) {
    //         console.log(candidate.completed)
    //         candidate.completed = !candidate.completed
    //         console.log(candidate.completed)
    //     }
    //     console.log(newTodos)
    //     return {
    //         todos: newTodos
    //     }
    // })
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

  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handlers={{ completed: this.handleCompleted }}
        />
      </div>
    );
  }
}

export default TodoContainer;
