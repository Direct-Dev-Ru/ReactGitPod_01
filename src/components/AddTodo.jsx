/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Button, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: '20px 0px 0px 0px',
  },
  typography: {
    margin: '10px 0px 0px 0px',
  },
  button: {
    width: '100%',
    margin: '10px 10px 0px 0px',
  },
  root: {
    width: '100%',
  },
}));

export default function AddTodo(props) {
  const classes = useStyles();
  const [state, setState] = useState({ title: '' });

  const onChange = (e) => {
    setState({ title: e.target.value });
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
          className={classes.input}
          onChange={onChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          className={classes.button}
        >
          Save
        </Button>
      </FormControl>
    </>
  );
}
