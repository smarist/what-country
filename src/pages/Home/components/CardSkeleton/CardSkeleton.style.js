import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  skeletonBox: {
    display: 'grid !important',
    gridGap: '70px !important',
    gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr)) !important',
    gridAutoRows: '320px !important',
  },
  skeleton: {
    height: '480px !important',
    borderRadius: '4px',
    minWidth: '210px !important',
  },
}));

export default useStyles;
