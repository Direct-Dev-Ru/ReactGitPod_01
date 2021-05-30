/* eslint-disable no-unused-vars */

import React from 'react';
import { SharedSnackbarConsumer } from '../context/SharedSnackbarContext';

const TodoItem = ({ todo, handlers }) => {
  const onCompleted = () => {
    handlers.completed(todo.id);
  };

  const onDeleted = () => {
    handlers.deleted(todo.id);
  };

  return (
    <li key={todo.id} className="li-app">
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={todo.completed}
        onChange={onCompleted}
      />
      <button type="button" onClick={onDeleted}>
        Delete Task
      </button>
      {todo.title}
    </li>
  );
  // return <SharedSnackbarConsumer>{({ openSnackbar }) => {}}</SharedSnackbarConsumer>;
};

export default TodoItem;
