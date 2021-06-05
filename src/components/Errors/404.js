/* eslint-disable func-names */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getRouteByName } from '@src/routes/Routes';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    margin: theme.spacing(8, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {
    height: 200,
    marginTop: theme.spacing(1),
  },
}));

export default function ({
  title = 'Oooooops! Page not found !!!',
  message = 'Server said, it has no such page ...',
}) {
  const classes = useStyles();
  return (
    <>
      <Grid container component="main" className={classes.root} direction="row">
        <Grid container justify="center" className={classes.paper} direction="row">
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={3}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="img/404.jpg"
                title="Oooooops! Page not found !!!"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="error"
                  align="center"
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="error" component="p" align="center">
                  {message}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={RouterLink}
                  to={getRouteByName('home').url}
                  variant="outlined"
                  color="default"
                  fullWidth
                >
                  Go Home
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
