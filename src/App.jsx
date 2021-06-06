/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import AppBarSimple from '@components/AppBarAndDrawer/AppBarSimple';
import { AuthContext } from '@context/AuthContext';
import { RouterComponents, getRoutesMap } from '@src/routes/Routes';
import { blue, blueGrey, teal, orange } from '@material-ui/core/colors';
import { useTheme } from './theme';

const muiTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
    background: {
      default: '#fafafa',
    },
  },
});

const useStyles = makeStyles((theme) => {
  window.theme = theme;
  return {
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
  };
});

function App() {
  const authContext = useContext(AuthContext);
  // console.log(authContext);
  const { setAuth, isAuth, user } = authContext;
  const classes = useStyles();
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <>
      <MuiThemeProvider theme={currentTheme}>
        {/* <MuiThemeProvider theme={muiTheme}> */}
        <CssBaseline />
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
      </MuiThemeProvider>
    </>
  );
}

export default App;
