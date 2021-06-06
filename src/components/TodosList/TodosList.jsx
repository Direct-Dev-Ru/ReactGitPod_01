/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { TodoItem } from '@components/TodoItem';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Link,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { getRouteByName } from '@src/routes/Routes';
import { AuthContext } from '@context/AuthContext';
import useStyles from './styles';

export default function TodosList(props) {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);
  const { isAuth, user } = authContext;

  return (
    <>
      <Grid container className={classes.root} spacing={1} justify="center">
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handlers={props.handlers} />
        ))}
      </Grid>
    </>
  );
}
