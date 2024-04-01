import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => {
    console.log("store= ", store);
    return store.user?.payload;
  });
  console.log("user= ", userData);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute flex justify-between z-10 w-11/12">
      <div className=" text-3xl font-extrabold text-red-600 py-9 px-36 bg-gradient-to-b from-black">
        MOTT
      </div>
      {userData && (
        <div className=" flex">
          <div className="mr-7 bg-blue-900 text-white w-12 h-8 rounded-md p-1 mt-2">
            {userData?.displayName}
          </div>
          <div>
            <button
              className="bg-blue-900 text-white rounded-md mr-2 w-20 h-8 mt-2"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
