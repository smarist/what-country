import { connect } from 'react-redux';
import Home from './Home';
import { setCountryList } from '../../redux/actions/countryAction';
import { setIsLoading } from '../../redux/actions/appAction';

const mapState = ({ country, app }) => ({
  countries: country.countryList,
  isLoading: app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  setCountryList: (data) => setCountryList(data)(dispatch),
  setIsLoading: (data) => setIsLoading(data)(dispatch),
});

export default connect(mapState, mapDispatchToProps)(Home);
