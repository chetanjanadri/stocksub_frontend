import {TYPES} from './actions';

const defaultState = {
  status: 'loggedOut',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TYPES.LOGGED_IN:
      return {
        ...state,
        ...action.payload,
      };
    case TYPES.LOG_OUT:
      return defaultState;
    default:
      return state;
  }
}
