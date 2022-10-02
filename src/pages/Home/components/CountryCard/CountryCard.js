import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './CountryCard.style';

function CountryCard() {
  const classes = useStyles();
  return (
    <Box className={classes.cardBox}>
      <Box className={classes.flagImage}>
        flagImg
      </Box>
      <Box className={classes.cardDetails}>
        <Typography className={classes.countryName}>Name</Typography>
        <Box className={classes.textBox}>
          <Typography className={classes.cardTitle}>Population:</Typography>
          <Typography className={classes.cardText}>population</Typography>
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.cardTitle}>Region:</Typography>
          <Typography className={classes.cardText}>region</Typography>
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.cardTitle}>Capital:</Typography>
          <Typography className={classes.cardText}>capital</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CountryCard;
