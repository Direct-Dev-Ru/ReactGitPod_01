import React from 'react';
// import PropTypes from 'prop-types';
import { AppBar, Button, Box } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { getActualNamedRoutes } from '@src/routes/Routes';
import { AuthContext } from '@context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 0,
  },
}));

export default function AppBarSimple() {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);
  console.log('AppBar:', authContext);
  const { isAuth, user } = authContext;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const routesForMenu = getActualNamedRoutes(isAuth, user, ['404']);
  console.log(routesForMenu);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {process.env.REACT_APP_TITLE}
          </Typography>
          <Box id="menu" className={classes.menu}>
            {routesForMenu.map((route) => (
              <Button
                color="inherit"
                component={RouterLink}
                to={route.to}
                key={route.name}
              >
                {route.display}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
