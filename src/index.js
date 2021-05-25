import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContext, AuthContextComponent } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';

// const title = document.querySelector('title');
// title.innerHTML = process.env.REACT_APP_TITLE;
ReactDOM.render(
  <AuthContextComponent>
    <App />
  </AuthContextComponent>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
