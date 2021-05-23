import React from 'react';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typography: {
    margin: '20px 0px 0px 0px',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" gutterBottom className={classes.typography}>
        Список запланированных задач
      </Typography>
      <hr />
    </>
  );
};

export default Header;
