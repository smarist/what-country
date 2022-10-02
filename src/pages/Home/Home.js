import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';
import CountryCard from './components/CountryCard';
import useStyles from './Home.style';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homeBox}>
      <Box>
        <Header />
      </Box>
      <Box className={classes.mainBox}>
        <Grid className={classes.homeGrid}>
          <CountryCard />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
