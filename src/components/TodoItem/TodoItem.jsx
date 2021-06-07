/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import clsx from 'clsx';
import {
  Button,
  IconButton,
  Collapse,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Box,
  Grid,
  Paper,
  Typography,
  Checkbox,
  Container,
  Link,
  Icon,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [startDate, setStartDate] = React.useState(new Date(todo.start_date));
  const [endDate, setEndDate] = React.useState(new Date(todo.end_date));
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
        elevation={9}
        lg={12}
        className={classes.root}
      >
        <Box className={classes.cardHeader} textAlign="center">
          <span> It is a good time to start this task ...</span>
        </Box>

        <Divider variant="fullWidth" className={classes.fullDivider} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box className={classes.cardTitle}>{todo.title}</Box>
          <Divider variant="middle" className={classes.middleDivider} />

          <Grid container justify="center">
            <Box p={1} className={classes.datesOfTask}>
              <KeyboardDateTimePicker
                disabled
                showTodayButton
                ampm={false}
                format="dd.MM.yyyy HH:mm"
                margin="normal"
                id="date-start-inline"
                label="Task start date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Box>
            <Box p={1} className={classes.datesOfTask}>
              <KeyboardDateTimePicker
                disabled
                showTodayButton
                ampm={false}
                format="dd.MM.yyyy HH:mm"
                margin="normal"
                id="date-end-inline"
                label="Task end date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Box>
          </Grid>
          {/* <Box
            display="flex"
            justifyContent="flex-start"
            className={classes.cardComplition}
          > */}
          <FormControlLabel
            className={classes.cardComplition}
            control={
              <Checkbox
                disabled
                checked={todo.completed}
                onChange={onCompleted}
                inputProps={{ 'aria-label': 'full completed checkbox' }}
              />
            }
            label="100% execution of task"
          />
          {/* </Box> */}

          <Box
            display="flex"
            justify="center"
            align="center"
            className={classes.cardActions}
          >
            <Box className={classes.cardActionsButtons}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>edit</Icon>}
                size="small"
              >
                Edit mode
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                endIcon={<Icon>details</Icon>}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                View details
              </Button>
              <Button
                variant="contained"
                onClick={onDeleted}
                endIcon={<Icon>delete</Icon>}
                className="delete"
                size="small"
              >
                Delete Task
              </Button>
            </Box>
            <Box className={classes.cardActionsIcons}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>
          </Box>

          <Collapse in={expanded} timeout="auto" unmountOnExit style={{ width: '100%' }}>
            <CardContent style={{ width: '100%' }}>
              <Typography
                paragraph
                style={{
                  fontStyle: 'bold',
                  fontSize: '1.5rem',
                  textDecoration: 'underline',
                }}
              >
                Task description:
              </Typography>
              <Typography paragraph style={{ fontStyle: 'bold', fontSize: '1.2rem' }}>
                {todo.description}
              </Typography>
              <Typography />
            </CardContent>
          </Collapse>
        </Box>
      </Grid>
    </MuiPickersUtilsProvider>
  );
  // return <SharedSnackbarConsumer>{({ openSnackbar }) => {}}</SharedSnackbarConsumer>;
}
