import React, { useState, useRef } from "react";
import { validateLoginForm } from "../utils/validateLoginForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { LOGIN_POSTER, PHOTO_URL } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formError, setFormError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    setFormError(null);
  };
  const dispatch = useDispatch();

  const handleLogin = () => {
    const validateMessage = validateLoginForm(
      name?.current?.value,
      email.current.value,
      password.current.value,
      isSignIn
    );
    setFormError(validateMessage);
    if (validateMessage !== null) {
      return;
    }
    if (!isSignIn) {
      const auth_details = auth;
      // sign up
      createUserWithEmailAndPassword(
        auth_details,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          setFormError(null);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { PHOTO_URL },
          })
            .then(() => {
              setFormError(null);
              const { displayName, email, uid } = auth.currentUser;
              dispatch(addUser({ displayName, email, uid }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setFormError(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute h-screen md:h-auto bg-no-repeat"
          src={LOGIN_POSTER}
          alt=""
        />
      </div>
      <div className="absolute  md:w-3/12  w-11/12 z-10 mt-32 right-0 left-0 m-auto h-60">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="md:pl-11 pl-3 py-11 bg-black bg-opacity-80 rounded-sm"
        >
          <h2 className="text-white md:text-2xl font-lg font-bold mb-3">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              name="name"
              className="relative md:p-2 p-1 md:m-2 m-1 w-72 bg-gray-800 text-white"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            type="email"
            name="Email"
            className="relative p-2 m-2 w-72 bg-gray-800 text-white"
            placeholder="Email or phone"
          />
          <input
            ref={password}
            type="password"
            name="Password"
            className="p-2 m-2 w-72 bg-gray-800 text-white"
            placeholder="password"
          />
          <br />
          <h4 className="font-bold text-l text-red-600 ml-1">{formError}</h4>
          <button
            className="md:p-2 md:m-2 p-1 m-1 bg-red-800 text-white font-bold md:px-5 px-2 rounded-md mt-4"
            onClick={handleLogin}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <h4
            onClick={handleSignIn}
            className="cursor-pointer text-white text-sm md:text-lg pl-2 md:pl-1"
          >
            {isSignIn ? "Sign Up Now!" : "Already registered? Sign In Now"}
          </h4>
          <h4 className="text-white italic pt-5 px-3">
            A world of creativity and fun awaits! Please don't navigate away
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
