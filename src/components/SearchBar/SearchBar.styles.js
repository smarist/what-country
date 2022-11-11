import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  autoComplete: (props) => ({
    border: 'none',
    fontSize: '0.7em',
    // backgroundColor: theme.palette.bgColor.main,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    // color: theme.palette.textColor.main,
    color: '#FFF',
    '&.Mui-focused fieldset': {
      // border: `1px solid ${theme.palette.primary.main} !important`,
    },
    '& label': {
      fontSize: 12,
      padding: 0,
      fontWeight: '200',
      marginTop: -5,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      // color: theme.palette.textColor.main,
      color: 'grey',
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
    color: '#FFF',
    // color: theme.palette.textColor.main,
    // backgroundColor: theme.palette.bg2Color.main,
    // '& fieldset': {
    //   border: (props) =>
    //     (props.noBorder
    //       ? 'none'
    //       : `1px solid ${theme.palette.borderColor.main}7f`),
    // },
  },
  searchIcon: {
    marginRight: 10,
    fontSize: 21,
    paddingTop: 3,
    color: `${theme.palette.textColor.main}7f`,
  },
}));

export default useStyles;
