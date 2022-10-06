import {
  SET_COUNTRY_LIST,
  SET_COUNTRY_REGION_LIST,
  SET_COUNTRY_NAME_LIST,
} from '../actionTypes/countryActionType';

export function setCountryList(data) {
  return (dispatch) => {
    dispatch({ type: SET_COUNTRY_LIST, data });
  };
}

export function setCountryRegionList(data) {
  return (dispatch) => {
    dispatch({ type: SET_COUNTRY_REGION_LIST, data });
  };
}

export function setCountryNameList(data) {
  return (dispatch) => {
    dispatch({ type: SET_COUNTRY_NAME_LIST, data });
  };
}
