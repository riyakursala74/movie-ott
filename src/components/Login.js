import React, { useState, useRef } from "react";
import { validateLoginForm } from "../utils/validateLoginForm";

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

  const handleLogin = () => {
    const validateMessage = validateLoginForm(
      name?.current?.value,
      email.current.value,
      password.current.value,
      isSignIn
    );
    setFormError(validateMessage);
  };
  return (
    <div className="absolute  w-3/12 z-10 mt-32 right-0 left-0 m-auto h-60">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="pl-11 py-11 bg-black bg-opacity-80 rounded-sm"
      >
        <h2 className="text-white text-2xl font-bold mb-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            name="name"
            className="relative p-2 m-2 w-72 bg-gray-800 text-white"
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
          className="p-2 m-2 bg-red-800 text-white font-bold px-5 rounded-md mt-4"
          onClick={handleLogin}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h4 onClick={handleSignIn} className="cursor-pointer text-white">
          {isSignIn ? "Sign Up Now!" : "Already registered? Sign In Now"}
        </h4>
      </form>
    </div>
  );
};

export default Login;
