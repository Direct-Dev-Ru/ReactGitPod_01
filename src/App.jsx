import React from 'react';
import './App.css';
// import Counter from './components/Counter'
import TodoContainer from './components/TodoContainer';
import { SharedSnackbarProvider } from './context/SharedSnackbarContext';

function App() {
  return (
    <div className="App">
      <SharedSnackbarProvider>
        <TodoContainer />
      </SharedSnackbarProvider>
    </div>
  );
}

export default App;
