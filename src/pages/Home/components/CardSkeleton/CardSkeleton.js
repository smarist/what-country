import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import useStyles from './CardSkeleton.style';

function CardSkeleton() {
  const classes = useStyles();
  return (
    <Grid container data-testid="card-skeleton" className={classes.skeletonBox}>
      {new Array(50).fill('').map((item, index) => (
        <Skeleton
          key={`skeleton-${index}`}
          animation="wave"
          className={classes.skeleton}
        />
      ))}
    </Grid>
  );
}

export default CardSkeleton;
