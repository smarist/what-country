import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  skeletonBox: {
    display: 'grid',
    gridGap: '70px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
    gridAutoRows: '320px',
  },
  skeleton: {
    height: '430px',
    borderRadius: '3px',
    // maxWidth: '230px',
  },
}));

export default useStyles;
