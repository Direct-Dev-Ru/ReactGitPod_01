/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, blueGrey, teal } from '@material-ui/core/colors';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState({
    palette: {
      // primary: blue,
      // secondary: blueGrey,
      background: {
        // default: '#e4f0e2',
        default: '#fafafa',
      },
    },
  });
  const muiTheme = createMuiTheme({
    ...currentTheme,
  });
  return [muiTheme, setCurrentTheme];
};

export default { useTheme };
