import React from "react";

const Login = () => {
  return (
    <div className="absolute  w-3/12 z-10 mt-32 right-0 left-0 m-auto ">
      <form className="bg-black opacity-80 z-10">
        <input
          type="email"
          name="Email"
          className="relative p-2 m-2  z-30"
          placeholder="Email or phone"
        />
        <input
          type="password"
          name="Password"
          className="p-2 m-2"
          placeholder="password"
        />
        <br />
        <button className="p-2 m-2 bg-red-800 text-white font-bold ">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
