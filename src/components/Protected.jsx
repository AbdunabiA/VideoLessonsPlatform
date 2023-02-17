import { useState } from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuthContext } from "../hooks/useAuthContext";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';



const Protected = ({children}) => {
  const { tokens } = useContext(AuthContext)
  // console.log("Protected", tokens);
  // const [isAuth, setIsAuth] = useState(false);
  
  // const tokens = JSON.parse(localStorage.getItem("tokens"));

  // const arr = tokens.refresh.split(".");
  // const refreshExpiry = new Date(JSON.parse(atob(arr[1])).exp * 1000);
  // console.log("refresh", refreshExpiry);
  // const current = new Date()
  // let tomorrow = new Date();
  // tomorrow.setDate(current.getDate());
  // if (refreshExpiry>tomorrow){
    // setIsAuth(true)
    // isAuth = true
  // }
  // console.log('pr',isAuth)
  // console.log('current',current)
  // const afterComma = tokens.access.substr(tokens.access.indexOf(".") + 1);
  // const accessTokenInfo = atob(afterComma.match(/[a-z0-9]+/i)[0]);
  // console.log('sec',JSON.parse(accessTokenInfo))
  // const expiryDate = new Date(JSON.parse(accessTokenInfo).exp * 1000);
  // const outpu = new Date(JSON.parse(accessTokenInfo).iat * 1000);
  // console.log('access', expiryDate)
  // console.log("created", outpu);

  // const encoded = btoa('Hello world')
  // const encode = btoa(encoded)
  // console.log('encoded',encoded,'encode', encode)
  // console.log(atob(atob(encode)))

  // const tokens = true
  // console.log('pr',tokens);
  const location = useLocation().pathname;
  console.log("location", location);
  return tokens ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
}

export default Protected