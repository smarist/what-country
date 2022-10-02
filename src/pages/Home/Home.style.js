import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  homeBox: {
    backgroundColor: theme.palette.bgColor.main,
    height: '100vh',
    color: theme.palette.textColor.main,
  },
  mainBox: {
    padding: '20px 47px',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  homeGrid: {
    display: 'grid',
    gridGap: '70px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
    gridAutoRows: '340px',
  },
}));

export default useStyles;
