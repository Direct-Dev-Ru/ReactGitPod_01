import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Link,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { getRouteByName } from '@src/routes/Routes';
import { AuthContext } from '@context/AuthContext';
import { Copyright } from '@components/Copyright';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '450px',
    maxHeight: '450px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

/** TODO: вывести карточки трех задач у которых срок завершения самый
 * близкий и с самым высоким приоритетом */

const cards = [
  {
    name: 'Задача настройки почты',
    description: 'Срок выполнения задачи настройки почты скоро истекает !!!',
    img: 'dontmissdeadline-min.jpg',
    path: '404',
  },
  {
    name: 'Задача настройки АРМ',
    description: 'Срок исполнения задачи настройки АРМ истек !!!',
    img: 'deadline2.jpg',
    path: '404',
  },
  {
    name: 'Задача сбора сводного отчета',
    description: 'Срок выполнения задачи скоро истекает !!! ',
    img: 'dontmissdeadline-min.jpg',
    path: '404',
  },
];

const Home = () => {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);
  const { isAuth, user } = authContext;
  const buttonLabel = getRouteByName('login');
  return (
    <>
      <main style={{ backgroundColor: 'lightgrey' }}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Material Task Tracker
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Скоро здесь будет мотивирующая цитата на каждый день ...
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="contained"
                    color="primary"
                  >
                    {buttonLabel.displayName}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`img/${card.img}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      color="secondary"
                      variant="outlined"
                      component={RouterLink}
                      to={`/${card.path}`}
                      fullWidth
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          mail to: info@direct-dev.ru
        </Typography>
        <Copyright href={'http:\\direct-dev.ru'} webSiteName="direct-dev.ru" />
      </footer>
      {/* End footer */}
    </>
  );
};

export default Home;
