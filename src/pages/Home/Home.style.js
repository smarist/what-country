import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  homeBox: {
    backgroundColor: theme.palette.bgColor.main,
    height: '100%',
    minHeight: '100vh',
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
    padding: '100px 47px !important',
    height: '100%',
    marginTop: '20px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  homeGrid: {
    display: 'grid !important',
    gridGap: '70px !important',
    gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr)) !important',
    gridAutoRows: '320px !important',
    marginTop: '60px !important',
  },
  search: {
    backgroundColor: `${theme.palette.bgColor2.main} !important`,
    color: theme.palette.textColor.main,
    borderRadius: '2px',
  },
  searchGrid: {
    // display: 'flex',
  },
  dropdownGrid: {
    marginTop: '5px !important',
    color: theme.palette.textColor.main,
  },
  dropdownBox: {
    height: '51px !important',
    color: theme.palette.textColor.main,
    borderRadius: '2px',
  },
  dropDown: {
    backgroundColor: `${theme.palette.bgColor2.main} !important`,
    color: theme.palette.textColor.main,
    height: '51px !important',
    fontSize: '13px !important',
    borderRadius: '2px !important',
    '& fieldset': {
      border: `1px solid ${theme.palette.borderColor.main} !important`,
    },
    '& label': {
      display: 'none',
    },
    '& .MuiList-padding ': {
      display: 'flex !important',
      flexDirection: 'column !important',
    },
  },
}));

export default useStyles;
