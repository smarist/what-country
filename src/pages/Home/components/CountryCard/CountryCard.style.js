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
    height: '158px',
    backgroundColor: 'blue',
    borderRadius: '3px 3px 0 0',
  },
  cardDetails: {
    padding: '25px',
  },
  textBox: {
    display: 'flex',
    marginTop: '5px',
  },
  countryName: {
    fontSize: '18px !important',
    fontWeight: '600',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '14px !important',
    fontWeight: '600',
  },
  cardText: {
    fontSize: '14px !important',
    marginLeft: '3px',
    color: theme.palette.textColor3.main,
  },
}));

export default useStyles;
