import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul className="ul-app">
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handlers={this.props.handlers} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
