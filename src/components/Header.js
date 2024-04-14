import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(true);
  const userData = useSelector((store) => {
    return store.user?.payload;
  });

  const toggleMenu = () => {
    setMenu(!menu);
  };
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
    <div className="absolute flex justify-between z-10 bg-gradient-to-b from-black overflow-hidden w-[100%]">
      <div className="text-3xl font-extrabold text-red-600 py-3 px-16 font-mono">
        MOTT
      </div>
      {userData && (
        <div
          className="flex mt-4"
          onMouseLeave={toggleMenu}
          onMouseEnter={toggleMenu}
        >
          <img
            className="mx-2 w-9 h-10"
            src="https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt=""
          />
          <div className="mr-6text-white relative">
            {menu ? (
              <FaCaretDown className="text-white mt-2" />
            ) : (
              <FaCaretUp className="text-white mt-2" />
            )}

            <div>
              <button
                onClick={handleSignOut}
                className={
                  menu
                    ? "invisible border border-gray-700 py-4 px-2 mt-4"
                    : "border border-gray-700 py-4 px-2 mt-4 text-white bg-gray-950"
                }
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
