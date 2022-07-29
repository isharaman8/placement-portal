import { USER_SIGNUP } from "../ActionTypes/actionType";

const initialState: any = {
  userSingup: [],
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
    default:
      return state;
  }
};
