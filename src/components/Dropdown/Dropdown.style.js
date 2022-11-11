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
      fontSize: '18px',
      marginTop: 0,
      width: '80%',
      display: 'block',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '& label.MuiInputLabel-shrink': {
      color: theme.palette.placeHolderColor.main,
      fontSize: '18px',
      marginTop: -8,
    },
    '& .MuiButtonBase-root': {
      color: theme.palette.textColor.main,
    },
  },
  rippleButton: {
    color: '#000',
  },
  input: {
    borderRadius: '3px',
    height: '35px',
    width: '100%',
    color: '#000',
    boxShadow: 'none',
    fontSize: '14px',
    paddingLeft: 2,
    paddingTop: 5,
    border: 'none',
    overflow: 'hidden',
    '& > div:first-child': {
      zIndex: 5,
      width: '100%',
      fontWeight: 400,
      paddingLeft: 5,
    },
    '&.Mui-focused > div:first-child': {
      backgroundColor: 'transparent',
    },
    '&.avatar-wrapper': {
      color: '#011B60',
    },
    '&.avatar-wrapper img': {
      backgroundColor: theme.palette.textColor.main,
      color: theme.palette.textColor.main,
      width: '100%',
      height: '100%',
      paddingTop: 12,
      paddingBottom: 12,
      justifyContent: 'flex-start',
    },
    '& path': {
      stroke: theme.palette.textColor.main,
    },
  },
  label: {
    marginTop: -7,
    fontSize: 16,
  },
  dropDownValue: {
    fontSize: '13px',
    fontWeight: 400,
    padding: '12px 15px',
    color: '#011B60',
  },
}));

export default useStyles;
