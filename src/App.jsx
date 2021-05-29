/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Container, Button, Grid, Paper } from '@material-ui/core';
import './App.css';
import TodoContainer from '@components/TodoContainer';
import Home from '@pages/Home/Home';
import SignIn from '@pages/SignIn/SignIn';
import AppBarAndDrawer from '@components/AppBarAndDrawer/AppBarAndDrawer';
import AppBarSimple from '@components/AppBarAndDrawer/AppBarSimple';
import { SharedSnackbarProvider } from '@context/SharedSnackbarContext';
import { AuthContext } from '@context/AuthContext';
import { useTheme } from './theme';

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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function App() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const { setAuth, isAuth } = authContext;
  const classes = useStyles();
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={currentTheme}>
        <Router>
          <div>
            <AppBarSimple currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
            <Switch>
              <Route path="/login">
                <SignIn />
              </Route>
              <Route path="/profile">{/* <Driver id={1} /> */}</Route>
              <Route path="/dashboard">{/* <Dashboard /> */}</Route>
              <Route exact path="/people">
                {/* <People /> */}
              </Route>
              <Route path="/people/:driverId">{/* <Driver /> */}</Route>
              <Route path="/map">{/* <Trips /> */}</Route>
              <Route path="/settings">
                {/* <Settings currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} /> */}
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

            <Container fixed>
              {/* {isAuth === false && (
                <Grid container className={classes.root} spacing={2}>
                  <Grid item xs={8} className={classes.gridInner}>
                    <Paper className={classes.paper}>
                      <div>
                        <Typography variant="h5" component="h3" spacing={4} gutterBottom>
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
              )} */}

              {isAuth && (
                <SharedSnackbarProvider>
                  <TodoContainer />
                </SharedSnackbarProvider>
              )}
            </Container>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
