import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { nanoid } from 'nanoid';
import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField';
import CardSkeleton from './components/CardSkeleton';
import CountryCard from './components/CountryCard';
import useStyles from './Home.style';
import Dropdown from '../../components/Dropdown/Dropdown';
import { regionOptions } from './constant';
import useHome from './hooks/useHome';

function Home({
  isLoading,
  countries,
}) {
  const classes = useStyles();
  const {
    dispatch,
    state,
    onSearch,
  } = useHome();
  const {
    searchValue,
    selectedValue,
  } = state;
  console.log(searchValue);
  return (
    <Box className={classes.homeBox} data-testid="home">
      <Box className={classes.headerBox}>
        <Header />
      </Box>
      <Box className={classes.mainBox}>
        <Grid container spacing={2}>
          <Grid item sm={5} md={5} xs={12}>
            <SearchField
              value={searchValue}
              noBorder
              iconComponent
              placeholder="Search for a country"
              onChange={onSearch}
              className={classes.search}
            />
          </Grid>
          <Grid item sm={2} md={3} xs={0} />
          <Grid item sm={5} md={3} xs={12} className={classes.dropdownGrid}>
            <Box className={classes.dropdownBox}>
              <Dropdown
                className={classes.dropDown}
                options={regionOptions}
                label="Filter by Region..."
                value={selectedValue}
                onSelect={(val) => {
                  dispatch({ selectedValue: val });
                }}
              />
            </Box>
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
