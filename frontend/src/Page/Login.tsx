import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { registration } from "../ReduxTool/AuthSlice";

import {AppDispatch,RootState} from "../ReduxTool/Store"

import "./login.css";
export const Login = () => {
  const [disable, setDisable] = useState(false);
  const store = useSelector((store: RootState) => store.auth)
  const dispatch = useDispatch<AppDispatch>();

  const handleRegister = () => {
    const data = {
      name: "ashok",
      emailID: "ashok@gmail.com",
      password: "123456",
      role: "admin"
    }
    dispatch(registration(data))

  }
  console.log(store)
  return (
    <div>
      <img className="wave" src="./wave.png" />
      <div className="container">
        <div className="img">
          <img src="./bg.svg" />
        </div>
        <div className="login-content">
          <form>
            <img src="./avatar.svg" />
            <h2 className="title">Welcome</h2>
            {disable ? (
              <div className="input-div one">
                <div className="i">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>{" "}
                </div>
                <div className="div">
                  <h5>Name</h5>
                  <input type="text" className="input" />
                </div>
              </div>
            ) : null}

            <div className="input-div one">
              <div className="i">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>{" "}
              </div>
              <div className="div">
                <h5>Email</h5>
                <input type="email" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>{" "}
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <div className="flex-col">
              <button
                type="button"
                className="mt-5  px-28 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 mb-2"
                onClick={() => setDisable(false)}
              >
                Login..
              </button>
              <button
                type="button"
                className="mt-1 px-28 mb-5  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 "
                onClick={() => setDisable(true)}
              >
                Signup
              </button>
            </div>
          </form>

          {/* <Button
            onClick={handleRegister}
            variant="contained">Register</Button> */}
        </div>
      </div>
    </div>
  );
};
