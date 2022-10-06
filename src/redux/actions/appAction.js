import { SET_APP_THEME, IS_LOADING } from '../actionTypes/appActionType';

export function setAppTheme(data) {
  return (dispatch) => {
    dispatch({ type: SET_APP_THEME, data });
  };
}

export function setIsLoading(data) {
  return (dispatch) => {
    dispatch({ type: IS_LOADING, data });
  };
}
