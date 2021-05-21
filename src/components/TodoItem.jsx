import React from 'react';

const TodoItem = ({ todo, handlers }) => {
  const onCompleted = () => handlers.completed(todo.id);
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
};

export default TodoItem;
