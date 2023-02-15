import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogin = () => {
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

      try{
        const res = await axios.post(
          "https://onlineteachingplatform.pythonanywhere.com/take_token/",
          {
            username,
            password,
          }
        );
        // if(res.statusText!=='OK'){
        //   setIsLoading(false);
        // }
        //save the tokens to locale storage
        localStorage.setItem("tokens", JSON.stringify(res.data));
        //update the auth context
        dispatch({ type: "LOGIN", payload: res.data });
        setIsLoading(false);
        console.log(res);
      }catch(err){
        setIsLoading(false);
        console.log('err',err.response)
        setError(err.response)
      }
        
    }

    return {login, error, isLoading}
}