/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
// new Date(Date.parse(strDate))
import React, { Component, useState } from 'react';
import { TextField, FormControl, Button, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './styles';

export default function AddTodo({ handlers }) {
  const classes = useStyles();
  const [state, setState] = useState({ title: '' });

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (e) => {
    let defaultDaysToDoTask = +process.env.REACT_APP_DEFAULT_DAYS_TODO;
    defaultDaysToDoTask |= 2;
    const currentDate = new Date();
    const currentDate2 = new Date();
    const finishPlanDate = new Date(
      currentDate2.setDate(currentDate2.getDate() + defaultDaysToDoTask),
    );
    const newTodo = {
      title: state.title,
      completed: false,
      completePercent: 0,
      start_date: currentDate.toUTCString(),
      end_date: finishPlanDate.toUTCString(),
      description: '',
      commentField1: '',
      commentField2: '',
      commentField3: '',
      protocolExecutors: [],
      protocolControllers: [],
      subTodos: [],
      todoExecutors: ['kolomietsem'],
      todoControlers: ['kuznetcovay'],
      userCreated: 'kuznetcovay',
      userModified: 'kuznetcovay',
      dateTimeCreated: currentDate.toUTCString(),
      dateTimeModified: currentDate.toUTCString(),
    };
    handlers.addingNewTodo(newTodo);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom className={classes.typography}>
        Запланировать задачу
      </Typography>
      <FormControl className={classes.root}>
        <TextField
          required
          id="todo-title"
          label="Enter Todo Title"
          value={state.title}
          variant="outlined"
          name="title"
          onChange={onChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          onClick={onClick}
        >
          Save
        </Button>
      </FormControl>
      <hr />
    </>
  );
}
