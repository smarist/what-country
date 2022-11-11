import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  autoComplete: (props) => ({
    border: 'none',
    fontSize: '0.7em',
    backgroundColor: theme.palette.bg2Color.main,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    color: theme.palette.textColor.main,
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.primary.main} !important`,
    },
    '& label': {
      fontSize: 12,
      padding: 0,
      fontWeight: '200',
      marginTop: -5,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.placeHolderColor.main,
      width: 'calc(100% - 50px)',
      ...props.labelStyle,
    },
  }),
  autoCompleteOptionItem: {
    fontSize: 13,
    paddingTop: 6,
    paddingBottom: 6,
    textTransform: 'capitalize',
  },
  textField: {
    height: 40,
    fontSize: '13px',
    color: theme.palette.textColor.main,
    backgroundColor: theme.palette.bg2Color.main,
    '& fieldset': {
      border: (props) =>
        (props.noBorder
          ? 'none'
          : `1px solid ${theme.palette.borderColor.main}7f`),
    },
  },
  productListItem: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 13,
    borderBottom: `1px solid ${theme.palette.dashboardBoarderColor.main}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '0.8em',
    '&.no-divider': {
      borderBottom: 'none',
    },
    '& .product-category': {
      fontWeight: 500,
      paddingLeft: 12,
    },
    '& .product-name': {
      paddingRight: 12,
      fontWeight: 200,
    },
    '& .product-button': {
      width: 100,
      fontSize: '1em',
      height: '25px !important',
      paddingTop: 9,
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 0,
      fontWeight: 400,
      backgroundColor: theme.palette.lightBlue.main,
      color: '#000',
      textTransform: 'capitalize',
    },
  },
  searchIcon: {
    marginRight: 10,
    fontSize: 21,
    paddingTop: 3,
    color: `${theme.palette.textColor.main}7f`,
  },
}));

export default useStyles;
