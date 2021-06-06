/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Box,
  Grid,
  Paper,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { getRouteByName } from '@src/routes/Routes';
import { AuthContext } from '@context/AuthContext';
import useStyles from './styles';

export default function TodoItem({ todo, handlers }) {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);
  const { isAuth, user } = authContext;

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const onCompleted = () => {
    handlers.completed(todo.id);
  };

  const onDeleted = () => {
    handlers.deleted(todo.id);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        item
        key={todo.id}
        component={Paper}
        elevation={6}
        lg={12}
        className={classes.root}
      >
        <Box className={classes.cardHeader} textAlign="center">
          It is a good time to make that task ...
        </Box>

        <Divider variant="fullWidth" style={{ margin: '10px' }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box className={classes.cardTitle}>Task Title: {todo.title}</Box>
          <Divider variant="middle" className={classes.middleDivider} />

          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy.MM.dd"
              margin="normal"
              id="date-start-inline"
              label="Date picker start"
              value={startDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change start date',
              }}
            />
          </Grid>
          <Box>
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
          </Box>
        </Box>
      </Grid>
    </MuiPickersUtilsProvider>
  );
  // return <SharedSnackbarConsumer>{({ openSnackbar }) => {}}</SharedSnackbarConsumer>;
}
