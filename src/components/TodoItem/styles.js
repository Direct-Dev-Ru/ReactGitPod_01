/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
    margin: theme.spacing(1),
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderColor: theme.palette.secondary.main,
    '& input:disabled': {
      color: theme.palette.text.primary,
    },
    '& label:disabled': {
      color: theme.palette.text.primary,
    },
    // '& button': {},
  },
  cardHeader: {
    fontFamily: 'DS Eraser Cyr',
    // minHeight: '200px',
    backgroundImage: 'url("img/sb_fone003.jpg")',
    backgroundColor: 'grey',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    height: '150px',
    padding: '20px',
    fontSize: '1.5rem',
    color: 'white',
  },
  cardTitle: {
    fontSize: '2rem',
    fontStyle: 'bold',
    textAlign: 'center',
    color: theme.palette.primary.dark,
    '& span': {
      textDecoration: 'underline',
    },
  },
  cardComplition: {
    width: '100%',
    paddingLeft: theme.spacing(3),
  },
  cardActions: {
    fontSize: '1.2rem',
    fontStyle: 'bold',
    width: '100%',
    '& button': {
      fontSize: '1rem',
      margin: theme.spacing(2),
    },
    '& button.delete': {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
  },
  cardActionsButtons: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: '2',
  },
  datesOfTask: {
    fontSize: '2rem',
    fontStyle: 'bold',
    margin: '0 16px',
    // color: theme.palette.primary.dark,
  },
  middleDivider: {
    margin: '8px',
    width: '70%',
    height: '2px',
  },
  fullDivider: {
    margin: '8px',
    height: '2px',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typography: {},
}));

export default useStyles;
