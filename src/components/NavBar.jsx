import { useState } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import { motion } from "framer-motion";
import { useLogOut } from '../hooks/useLogOut';

const NavBar = ({ screenWidth, showDashboard, setShowDashboard }) => {
  const {logout} = useLogOut()
  

  return (
    <div className="w-full h-[10vh] bg-slate-800 flex items-center justify-between px-2 md:px-8">
      {screenWidth < 1024 && (
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7, rotate: 360 }}
          
        >
          {showDashboard ? (
            <AiOutlineClose
              onClick={() => setShowDashboard(!showDashboard)}
              className="text-white text-3xl cursor-pointer"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setShowDashboard(!showDashboard)}
              className="text-white text-3xl cursor-pointer"
            />
          )}
        </motion.div>
      )}

      <div className="rounded-md h-[50%] w-[40%] bg-blue-600">
        <input
          type="search"
          className="w-full h-full rounded-md p-2 focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="flex bg-blue-500 items-center space-x-6 rounded-md">
        <div className="text-sm">
          <div>eng/rus</div>
          <div>nightmode</div>
          <div>settings</div>
        </div>
        <div className="0">
          <p className="text-xl font-extrabold">logo</p>
        </div>
        <div className="h-full rounded-md">
          <p className="text-center">Username</p>
          <p className="text-center cursor-pointer rounded-md border" onClick={()=>logout()}>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar