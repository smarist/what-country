import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { nanoid } from 'nanoid';
import Header from '../../components/Header/Header';
import UcSearchField from '../../components/UcSearchField';
import CardSkeleton from './components/CardSkeleton';
import CountryCard from './components/CountryCard';
import useStyles from './Home.style';

function Home({ isLoading, countries }) {
  const classes = useStyles();
  console.log(isLoading);
  return (
    <div className={classes.homeBox}>
      <Box className={classes.headerBox}>
        <Header />
      </Box>
      <Box className={classes.mainBox}>
        <Grid container spacing={2}>
          <Grid item sm={5} md={4} xs={12}><UcSearchField /></Grid>
          <Grid item sm={2} md={4} xs={0} />
          <Grid item sm={5} md={4} xs={12}>Dropdown</Grid>
        </Grid>
        {isLoading ? (
          <CardSkeleton />
        )
          : (
            <Grid className={classes.homeGrid}>
              {countries?.map(({
                population, region, capital, flags, name,
              }) => (
                <CountryCard
                  key={nanoid()}
                  population={population}
                  region={region}
                  capital={capital}
                  flag={flags.svg}
                  name={name?.common}
                />
              ))}
            </Grid>
          )}
      </Box>
    </div>
  );
}

export default Home;
