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
    // '& input': {},
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
  },
  middleDivider: {
    margin: '10px',
    width: '50%',
  },
  typography: {},
}));

export default useStyles;
