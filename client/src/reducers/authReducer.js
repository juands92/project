import isEmpty from "../validation/is_empty";

import { SET_CURRENT_USER, ACCEPT_COOKIES, SET_LOGING } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  acceptCookies: false,
  loginBasic: {},
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_LOGING:
      return {
        ...state,
        acceptCookies: !isEmpty(action.payload),
        loginBasic: action.payload
      };
    case ACCEPT_COOKIES:
      return {
        ...state,
        acceptCookies: false
      };
    default:
      return state;
  }
}
