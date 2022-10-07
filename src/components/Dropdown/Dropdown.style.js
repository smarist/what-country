import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    '& fieldset': {
      border: 'none',
    },
    '& label': {
      color: theme.palette.placeHolderColor.main,
      fontSize: '14px',
      marginTop: 0,
      width: '80%',
      display: 'block',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '& label.MuiInputLabel-shrink': {
      color: theme.palette.placeHolderColor.main,
      fontSize: '15px',
      marginTop: -7,
    },
  },
  input: {
    borderRadius: '0',
    height: '35px',
    width: '100%',
    color: theme.palette.textColor.main,
    backgroundColor: theme.palette.dropDownBgColor.main,
    boxShadow: 'none',
    fontSize: '14px',
    paddingLeft: 10,
    paddingRight: 35,
    boxSizing: 'border-box',
    border: 'none',
    '& > div:first-child': {
      zIndex: 5,
      width: '100%',
      fontWeight: 400,
      paddingLeft: 5,
    },
    '&.Mui-focused > div:first-child': {
      backgroundColor: 'transparent',
    },
  },
}));

export default useStyles;
