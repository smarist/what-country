import { connect } from 'react-redux';
import Header from './Header';
import setAppTheme from '../../redux/actions/appAction';

const mapState = ({ app }) => ({
  appTheme: app?.appTheme,
});

const mapDispatchToProps = dispatch => ({
  setAppTheme: (data) => setAppTheme(data)(dispatch),
});

export default connect(mapState, mapDispatchToProps)(Header);
