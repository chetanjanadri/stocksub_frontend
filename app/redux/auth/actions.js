export const TYPES = {
  LOGGED_IN: 'auth/loggedIn',
  LOG_OUT: 'auth/loggedOut',
};
export const saveLoginDetails = (loginDetails) => ({
  type: TYPES.LOGGED_IN,
  payload: loginDetails,
});

export const logout = () => ({
  type: TYPES.LOG_OUT,
  payload: {},
});
