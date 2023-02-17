import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import { AnimatePresence } from "framer-motion";
import { useAuthContext } from "../hooks/useAuthContext";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Layout = () => {  
  const [showDashboard, setShowDashboard] = useState(false);
  const screenWidth = useWindowSize()[0]
  const {tokens} = useContext(AuthContext)
  return (
      // tokens ? (
        <>
          <NavBar
            showDashboard={showDashboard}
            setShowDashboard={setShowDashboard}
            screenWidth={screenWidth}
          />
          <div
            className={`flex overflow-hidden bg-[url('./src/assets/webDiary.jpg')] bg-no-repeat bg-cover bg-center`}
          >
            <SideMenu showDashboard={showDashboard} screenWidth={screenWidth} />
            {/* <Suspense fallback={<p>Loading the page</p>}> */}
            <AnimatePresence initial={false} mode={"wait"}>
              <Outlet />
            </AnimatePresence>
            {/* </Suspense> */}
          </div>
        </>
      // ) : (
      //   <Navigate to={"/login"} replace />
      //   // <Login/>
      // )
  );
};

export default Layout;
