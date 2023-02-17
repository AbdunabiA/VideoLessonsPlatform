import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            
            return {tokens:action.payload}
        case 'LOG_OUT':
            return {tokens:null}
        default:
            return state
    }
}

export function AuthContextProvider({children}){
    const [state, dispatch] = useReducer(authReducer, {
        tokens:null
    })

    useEffect(()=>{
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const arr = tokens?.refresh.split(".");
      const refreshExpiry =
      arr && new Date(JSON.parse(atob(arr[1])).exp * 1000);
      console.log("refresh/context", refreshExpiry);
      const currentDate = new Date();
    //   let tomorrow = new Date();
    //   tomorrow.setDate(currentDate.getDate()+1);
      if (refreshExpiry > currentDate) {
        dispatch({ type: "LOGIN", payload: tokens });
      }
    }, [])
    console.log('AuthContext:', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
} 