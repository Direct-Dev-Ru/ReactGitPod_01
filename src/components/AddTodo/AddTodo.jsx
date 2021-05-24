/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState } from 'react';
import { TextField, FormControl, Button, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './styles';

export default function AddTodo(props) {
  const classes = useStyles();
  const [state, setState] = useState({ title: '' });

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
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
        <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />}>
          Save
        </Button>
      </FormControl>
      <hr />
    </>
  );
}
