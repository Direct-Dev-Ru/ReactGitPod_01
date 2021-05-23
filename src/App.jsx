/* eslint-disable no-unused-vars */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Container } from '@material-ui/core';
import './App.css';
import TodoContainer from './components/TodoContainer';
import { SharedSnackbarProvider } from './context/SharedSnackbarContext';

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        {/* <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        /> */}
        <SharedSnackbarProvider>
          <TodoContainer />
        </SharedSnackbarProvider>
      </Container>
    </>
  );
}

export default App;
