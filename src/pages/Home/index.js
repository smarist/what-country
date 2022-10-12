import { connect } from 'react-redux';
import Home from './Home';
import { setCountryList } from '../../redux/actions/countryAction';

const mapState = ({ country, app }) => ({
  countries: country.countryList,
  isLoading: app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  setCountryList: (data) => setCountryList(data)(dispatch),
});

export default connect(mapState, mapDispatchToProps)(Home);
