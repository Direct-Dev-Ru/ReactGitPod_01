/* eslint-disable func-names */
import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { getRouteByName } from '@src/routes/Routes';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Paper,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: { flexGrow: 1, paddingTop: '10vh' },
  paper: {
    margin: '10px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20% 0 20% 0',
    alignItems: 'center',
    fontSize: '4rem',
    fontFamily: 'DS Eraser Cyr',
  },
  eraserFont: {
    fontFamily: 'DS Eraser Cyr',
  },
};

function HigherOrderComponent404({
  title = 'Oooooops! Page not found !!!',
  message = 'Server said, it has no such page ...',
  classes,
}) {
  const history = useHistory();
  React.useEffect(() => {
    setTimeout(() => {
      history.push(getRouteByName('home').url);
    }, 10000);
  });

  return (
    <>
      <Grid container justify="center" className={classes.root} direction="row">
        <Grid
          item
          xs={12}
          sm={8}
          md={10}
          component={Paper}
          elevation={3}
          className={classes.paper}
        >
          <Card style={{ minWidth: '100%' }}>
            <CardMedia
              className={classes.media}
              image="img/blfon001.jpg"
              // image="img/fone0021-min.jpg"
              title="Oooooops! Page not found !!!"
            >
              <Box textAlign="center" style={{ color: 'red' }}>
                404
              </Box>
              <Box textAlign="center" style={{ fontSize: '2rem' }}>
                Page Not Found
              </Box>
              <Button
                component={RouterLink}
                to={getRouteByName('home').url}
                style={{ marginTop: '10%' }}
                color="secondary"
                fullWidth
              >
                Go Home
              </Button>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

HigherOrderComponent404.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent404);
