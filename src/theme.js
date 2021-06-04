/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, blueGrey } from '@material-ui/core/colors';

const defaultTheme = {
  palette: {
    primary: blue,
    secondary: blueGrey, // ss,
    // type: "dark",
  },
  typography: {
    fontFamily: "'Eraser','Roboto','Oxanium', cursive;",
  },
  status: {
    danger: 'orange',
  },
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState({
    palette: {
      primary: blue,
      secondary: blueGrey,
    },
  });
  const muiTheme = createMuiTheme({
    ...defaultTheme,
    ...currentTheme,
  });
  return [muiTheme, setCurrentTheme];
};

export default { useTheme };
