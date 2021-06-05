/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const AuthContext = React.createContext();
const AuthProvider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

class AuthContextComponent extends Component {
  state = {
    isAuth: false,
    user: null,
  };

  setAuth = (value) => {
    this.setState((prevState) => ({ ...prevState, isAuth: value }));
  };

  login = () => {
    this.setAuth(true);
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line react/jsx-indent
    <Redirect push to="/todos" />;
  };

  render() {
    const { children } = this.props;
    return (
      <AuthProvider value={{ ...this.state, setAuth: this.setAuth, login: this.login }}>
        {children}
      </AuthProvider>
    );
  }
}

export { AuthContextComponent, AuthContext, AuthProvider, AuthConsumer };
