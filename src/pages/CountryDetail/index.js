import { connect } from 'react-redux';
import CountryDetail from './CountryDetail';
import { setCountryNameList } from '../../redux/actions/countryAction';

const mapState = ({ country, app }) => ({
  country: country.countryNameList,
  isLoading: app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  setCountryNameList: (data) => setCountryNameList(data)(dispatch),
});

export default connect(mapState, mapDispatchToProps)(CountryDetail);
