/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import AppBarSimple from '@components/AppBarAndDrawer/AppBarSimple';
import { AuthContext } from '@context/AuthContext';
import { RouterComponents, getRoutesMap } from '@src/routes/Routes';
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
  // console.log(authContext);
  const { setAuth, isAuth, user } = authContext;
  const classes = useStyles();
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={currentTheme}>
        <Router>
          <AppBarSimple currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
          <RouterComponents isAuth={isAuth} user={user} />

          {/* <Container fixed>
              {isAuth && (
                <SharedSnackbarProvider>
                  <TodoContainer />
                </SharedSnackbarProvider>
              )}
            </Container> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
