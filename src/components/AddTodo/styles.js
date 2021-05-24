/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core/styles';

const rootStyle = {
  width: '100%',
};

const mt10 = {
  marginTop: '10px',
};
const mb10 = {
  marginBottom: '10px',
};
const mb20 = {
  marginBottom: '20px',
};
const mt20 = {
  marginTop: '20px',
};

const useStyles = makeStyles((theme) => ({
  theme,
  root: {
    ...rootStyle,
    '& input': {},
    '& button': {
      width: '100%',
      height: '40px',
      ...mt10,
      ...mb20,
    },
  },
  typography: {
    ...mt10,
  },
}));

export default useStyles;
