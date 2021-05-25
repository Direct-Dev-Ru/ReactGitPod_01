/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Button, Grid, Paper } from '@material-ui/core';
import './App.css';
import TodoContainer from './components/TodoContainer';
import { SharedSnackbarProvider } from './context/SharedSnackbarContext';
import { AuthContext } from './context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  gridInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(4),
  },
}));

function App() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const { setAuth, isAuth } = authContext;
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed>
        {isAuth === false && (
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={8} className={classes.gridInner}>
              <Paper className={classes.paper}>
                <div>
                  <Typography variant="h3" component="h3" spacing={4}>
                    Log In
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setAuth(true)}
                    className={classes.button}
                  >
                    Login
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        )}

        {isAuth && (
          <SharedSnackbarProvider>
            <TodoContainer />
          </SharedSnackbarProvider>
        )}
      </Container>
    </>
  );
}

export default App;
