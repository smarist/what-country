import { SET_APP_THEME } from '../actionTypes/appActionType';

const initialState = {
  appTheme: 'light',
};
export default function appReducer(state = initialState, action) {
  const { data, type } = action;
  switch (type) {
    case SET_APP_THEME:
      return {
        ...state,
        appTheme: data,
      };
    default:
      return state;
  }
}
