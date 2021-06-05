/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-labels */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from '@components/TodosList';
import todosService from '@src/services/todosService';
import { AddTodo } from '@components/AddTodo';
import { Container, Typography } from '@material-ui/core/';
import useStyles from './styles';

const getTodos = (setState) => {
  todosService
    .getTodos()
    .then((res) => {
      const newState = {
        todos: res.data,
        isLoading: false,
        error: null,
      };
      if (res.status !== 200) {
        newState.error = { message: `Server send ${res.status}` };
      }
      setState(newState);
    })
    .catch((err) => {
      setState({
        todos: [],
        isLoading: false,
        error: err,
      });
    });
};

const TodoPage = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({ isLoading: true, error: null, todos: [] });

  React.useEffect(() => getTodos(setState), []);

  const handleCompleted = (id) => {
    setState((prevState) => ({
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

  const handleDeleted = (id) => {
    // console.log('deleted', id);
    setState((prevState) => {
      return {
        todos: [...prevState.todos.filter((todo) => todo.id !== id)],
      };
    });
  };

  const addNewTodo = (newTodo) => {
    console.log(newTodo);
    setState((prevState) => {
      return {
        todos: [...prevState.todos, { ...newTodo, id: uuidv4() }],
      };
    });
  };

  const handlers = {
    completed: handleCompleted,
    deleted: handleDeleted,
    addingNewTodo: addNewTodo,
  };

  return (
    <>
      <Container maxWidth="lg">
        <AddTodo handlers={handlers} />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          // className={classes.eraserFont}
          // style={{ fontFamily: "'dc-eraser-cyr'" }}
        >
          Список задач для исполнения
        </Typography>
        <TodosList todos={state.todos} isLoading={state.isLoading} handlers={handlers} />
      </Container>
    </>
  );
};

export default TodoPage;
