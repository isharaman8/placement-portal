import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
} from "../ActionTypes/actionType";

const initialState: any = {
  userSignup: {},
  userLogin: {},
};

export const reducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case USER_SIGNUP:
      return {
        ...state,
        userSignup: payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        userLogin: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userLogin: {},
      };
    default:
      return state;
  }
};
