/* eslint-disable no-unused-vars */

import React from 'react';
import { SharedSnackbarConsumer } from '../context/SharedSnackbarContext';

const TodoItem = ({ todo, handlers }) => {
  return (
    <SharedSnackbarConsumer>
      {({ openSnackbar }) => {
        const onCompleted = () => {
          handlers.completed(todo.id);
          openSnackbar(
            `Задача ${todo.title} изменила состояние на : 
            ${!todo.completed ? 'выполнена' : 'в процессе'}`,
          );
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
            {todo.title}
          </li>
        );
      }}
    </SharedSnackbarConsumer>
  );
};

export default TodoItem;
