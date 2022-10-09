import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardBox: {
    // width: '240px',
    // height: '280px',
    boxShadow: theme.palette.boxShadow.main,
    borderRadius: '3px',
    backgroundColor: theme.palette.bgColor2.main,
  },
  flagImage: {
    height: '150px',
    width: '100%',
    borderRadius: '3px 3px 0 0',
  },
  flag: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardDetails: {
    padding: '20px',
  },
  textBox: {
    display: 'flex',
    marginTop: '5px',
  },
  countryName: {
    fontSize: '16px !important',
    fontWeight: '600',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '14px !important',
    fontWeight: '600',
    color: theme.palette.textColor2.main,
  },
  cardText: {
    fontSize: '14px !important',
    marginLeft: '4px !important',
    color: theme.palette.textColor3.main,
  },
}));

export default useStyles;
