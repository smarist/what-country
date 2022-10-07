import { Box, Grid } from '@material-ui/core';
import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';
import Header from '../../components/Header/Header';
// import UcSearchField from '../../components/SearchField';
import CardSkeleton from './components/CardSkeleton';
import CountryCard from './components/CountryCard';
import useStyles from './Home.style';
import Dropdown from '../../components/Dropdown/Dropdown';
import { regionOptions } from './constant';

function Home({ isLoading, countries }) {
  const classes = useStyles();
  const initState = {
    searchValue: '',
    selectedValue: '',
  };

  const [state, dispatch] = useReducer((stat, value) => ({ ...stat, ...value }), initState);

  const {
    // searchValue,
    selectedValue,
  } = state;

  return (
    <Box className={classes.homeBox}>
      <Box className={classes.headerBox}>
        <Header />
      </Box>
      <Box className={classes.mainBox}>
        <Grid container spacing={2}>
          <Grid item sm={5} md={5} xs={12}>
            {/* <UcSearchField
              value={searchValue}
              onChange={(val) => {
                dispatch({ searchValue: val });
              }}
            /> */}
          </Grid>
          <Grid item sm={2} md={3} xs={0} />
          <Grid item sm={5} md={3} xs={12}>
            <Dropdown
              className={classes.dropDown}
              options={regionOptions}
              label="Region"
              value={selectedValue}
              onSelect={(val) => {
                dispatch({ selectedValue: val });
              }}
            />
          </Grid>
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
    </Box>
  );
}

export default Home;
