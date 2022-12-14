import axios from "axios";
import { Dispatch } from "react";
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
} from "../ActionTypes/actionType";

export const userSignup = (payload: any) => {
  return {
    type: USER_SIGNUP,
    payload: payload,
  };
};

export const userLogin = (payload: any) => {
  console.log(payload, "login");
  return {
    type: USER_LOGIN,
    payload: payload,
  };
};

export const userLogout = (payload: any) => {
  return { type: USER_LOGOUT, payload: payload };
};
export const userSignUpRequest = (payload: any) => (dispatch: any) => {
  console.log(payload, "payload");
  axios
    .post(
      `https://placements-backend-hackathon.herokuapp.com/auth/signup`,
      payload
    )
    .then((res) => {
      console.log(res.data);
      dispatch(userSignup(res.data.payload));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const userLoginRequest = (payload: any) => (dispatch: any) => {
  console.log(payload, "payload");
  axios
    .post(
      `https://placements-backend-hackathon.herokuapp.com/auth/signin`,
      payload
    )
    .then((res) => {
      console.log(res.data);
      dispatch(userLogin(res.data.payload));
    })
    .catch((err) => {
      console.log(err);
    });
};
