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
import Header from '@components/Header';
import { Container } from '@material-ui/core/';
import useStyles from './styles';
// import { TodoContainer } from '@components/TodoContainer';

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
      <Container className={classes.cardGrid} maxWidth="xl">
        <AddTodo handlers={handlers} />
        <Header />
        <TodosList todos={state.todos} isLoading={state.isLoading} handlers={handlers} />
      </Container>
    </>
  );
};

class TodoPageClass extends React.Component {
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

export default TodoPage;
