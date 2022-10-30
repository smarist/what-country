import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headerBox: {
    backgroundColor: theme.palette.bgColor2.main,
    padding: '15px 25px',
    display: 'flex !important',
    justifyContent: 'space-between',
    webkitBoxShadow: ' 0px 2px 10px -5px rgba(21,6,5,1)',
    mozBoxShadow: ' 0px 2px 10px -5px rgba(21,6,5,1)',
    boxShadow: ' 0px 2px 10px -5px rgba(21,6,5,1)',
    color: theme.palette.textColor.main,
  },
  headerH1: {
    fontSize: '1.3em !important',
    fontWeight: '600',
  },
  switchBox: {
    display: 'flex',
    gap: '10px',
    marginTop: '3px',
  },
  moonIcon: {
    marginTop: '2px',
    height: '18px',
    width: '18px',
  },
  sunIcon: {
    marginTop: '2px',
    height: '20px',
    width: '20px',
  },
}));

export default useStyles;
