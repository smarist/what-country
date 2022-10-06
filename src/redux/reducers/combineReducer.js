import { combineReducers } from 'redux';
import appReducer from './appReducer';
import countryReducer from './countryReducer';

export default combineReducers({
  app: appReducer,
  country: countryReducer,
});
