/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '@context/AuthContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://direct-dev.ru">
        direct-dev.ru
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
  },
  image: {
    backgroundImage: 'url(img/wallpaper2-min.PNG)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    paddingTop: '40px',
  },
  paper: {
    margin: theme.spacing(8, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);
  const [state, setState] = React.useState({ error: null });
  const { setAuth, isAuth, login } = authContext;
  console.log(authContext);

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid container justify="center" className={classes.image}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={state.email}
                onChange={onChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={login}
              >
                Sign In
              </Button>
              {state.error && (
                <Grid container>
                  <Grid item xs>
                    <Typography
                      color="error"
                      variant="caption"
                      display="block"
                      gutterBottom
                    >
                      Place to print error messages
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </form>
          </Grid>
          <Box mt={2}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
