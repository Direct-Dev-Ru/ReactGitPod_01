/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(1),
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    flexGrow: 1,
    '& input': {},
    '& button': {},
  },
  typography: {},
}));

export default useStyles;
