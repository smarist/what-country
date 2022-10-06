import { SET_APP_THEME, IS_LOADING } from '../actionTypes/appActionType';

const initialState = {
  appTheme: 'light',
  isLoading: true,
};

// eslint-disable-next-line
export default function appReducer(state = initialState, action) {
  const { data, type } = action;
  switch (type) {
    case SET_APP_THEME:
      return {
        ...state,
        appTheme: data || (state.appTheme === 'dark' ? 'light' : 'dark'),
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: data,
      };
    default:
      return state;
  }
}
