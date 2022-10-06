import {
  SET_COUNTRY_LIST,
  SET_COUNTRY_REGION_LIST,
  SET_COUNTRY_NAME_LIST,
} from '../actionTypes/countryActionType';

const initialState = {
  countryList: [],
  countryRegionList: [],
  countryNameList: [],
};

// eslint-disable-next-line
export default function countryReducer(state = initialState, action) {
  const { data, type } = action;
  switch (type) {
    case SET_COUNTRY_LIST:
      return {
        ...state,
        countryList: data,
      };
    case SET_COUNTRY_REGION_LIST:
      return {
        ...state,
        countryRegionList: data,
      };
    case SET_COUNTRY_NAME_LIST:
      return {
        ...state,
        countryNameList: data,
      };
    default:
      return state;
  }
}
