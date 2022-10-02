import { SET_APP_THEME } from '../actionTypes/appActionType';

export default function setAppTheme(data) {
  return (dispatch) => {
    dispatch({ type: SET_APP_THEME, data });
  };
}
