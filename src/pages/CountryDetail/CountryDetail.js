import { Box, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useStyles from './CountryDetail.style';
import countryServices from '../../Services/country.services';

function CountryDetail({ country, setCountryNameList }) {
  const classes = useStyles();
  const { nameId } = useParams();
  useEffect(() => {
    countryServices.getCountryNameList(nameId)
      .then((res) => {
        setCountryNameList(res);
      })
      .catch(() => {});
  }, []);
  return (
    <Box className={classes.CountryDetailBox}>
      <Box className={classes.headerBox}>
        <Header />
      </Box>
      <Box className={classes.mainBox}>
        <Link to="/Home" className={classes.link}>
          <Box className={classes.backBox}>
            <Box className={classes.arrow}>&larr;</Box>
            <Box className={classes.back}>Back</Box>
          </Box>
        </Link>
        {country?.map(({
          name, capital, subregion, region, population,
          flags, languages, borders, currencies, tld,
          timezones,
        }) => (
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.gridBox}
            >
              <Box className={classes.flagImage}>
                <img src={flags.svg} alt="flag" className={classes.flag} />
              </Box>
            </Grid>
            <Grid item container xs={12} sm={12} md={6} lg={6} className={classes.gridBox}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography>{name?.common}</Typography>
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6} className={classes.gridBox}>
                <Box>
                  <Box className={classes.typoBox}>
                    <Typography>Native Name:</Typography>
                    {(Object.values(name?.nativeName).map((native) => (
                      <Typography>{native?.common}</Typography>
                    )))}
                  </Box>
                  <Box className={classes.typoBox}>
                    <Typography>Population:</Typography>
                    <Typography className={classes.typo2}>{population}</Typography>
                  </Box>
                  <Box className={classes.typoBox}>
                    <Typography>Region:</Typography>
                    <Typography className={classes.typo2}>{region}</Typography>
                  </Box>
                  <Box className={classes.typoBox}>
                    <Typography>Sub Region:</Typography>
                    <Typography className={classes.typo2}>{subregion}</Typography>
                  </Box>
                  <Box className={classes.typoBox}>
                    <Typography>Capital:</Typography>
                    <Typography className={classes.typo2}>{capital}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6} className={classes.gridBox}>
                <Box>
                  <Box className={classes.typoBox}>
                    <Typography>Top Level Domain:</Typography>
                    {(Object.values(tld).map((domain) => (
                      <Typography className={classes.typo2}>{domain}</Typography>
                    )))}
                  </Box>
                  <Box className={classes.typoBox}>
                    <Typography>Currency:</Typography>
                    <Typography className={classes.typo2}>
                      {(Object.values(currencies).map((currency) => (
                        <Box className={classes.typoBox}>
                          <Typography className={classes.typo2}>{currency?.name}</Typography>
                          <Typography>
                            (
                            {currency?.symbol}
                            )
                          </Typography>
                        </Box>
                      )))}
                    </Typography>
                  </Box>
                  <Box className={classes.typoBox}>
                    <Typography>Languages:</Typography>
                    {(Object.values(languages)).map((language) => (
                      <Typography className={classes.typo2}>
                        {language}
                      </Typography>
                    ))}
                  </Box>
                  <Box className={classes.typoBox}>
                    <Typography>Time Zones:</Typography>
                    {(Object.values(timezones)).map((zones) => (
                      <Typography className={classes.typo2}>
                        {zones}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={12} className={classes.gridBox}>
                <Box className={classes.bordersBox}>
                  {borders?.map((border) => (
                    <Box className={classes.borderBox}>{border}</Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

export default CountryDetail;
