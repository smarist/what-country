import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  countryDetailBox: {
    backgroundColor: theme.palette.bgColor.main,
    height: '100vh',
    paddingBottom: '20px',
    color: theme.palette.textColor.main,
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  headerBox: {
    overFlow: 'hidden',
    position: 'fixed',
    width: '100%',
    zIndex: 2,
  },
  mainBox: {
    padding: '85px 25px !important',
    height: '90vh',
    backgroundColor: theme.palette.bgColor.main,
    color: theme.palette.textColor.main,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  gridBox: {
    marginTop: '40px !important',
  },
  flagImage: {
    height: '270px',
    // width: '100%',
    borderRadius: '3px 3px 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  flag: {
    width: '100%',
    maxWidth: '500px',
    height: '100%',
    objectFit: 'cover',
  },
  typoBox: {
    display: 'flex',
  },
  typo2: {
    marginLeft: '7px !important',
  },
  bordersBox: {
    display: 'flex',
    gap: '8px',
  },
  borderBox: {
    width: '50px',
    height: '45px',
    padding: '2px',
    border: '1px solid grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBox: {
    display: 'flex',
    border: '1px solid grey',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    padding: '2px 5px',
    gap: '5px',
    background: theme.palette.bgColor2.main,
    color: theme.palette.textColor.main,
    cursor: 'pointer',
  },
  arrow: {
    fontSize: '30px !important',
    marginTop: '-4px !important',
  },
  back: {
    marginTop: '0',
    fontSize: '19px !important',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default useStyles;
