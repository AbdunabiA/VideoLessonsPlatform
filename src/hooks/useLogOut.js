import { useAuthContext } from "./useAuthContext"
import { useNavigate, redirect } from "react-router-dom"

export const useLogOut = () => {
    const  { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const logout = () => {
        // Delete tokens from localeStorage
        localStorage.removeItem('tokens')
        //Delete alreadyLoaded from localeStorage
        localStorage.removeItem("alreadyLoaded");
        //dispatch logout action
        dispatch({type:'LOG_OUT'})

        navigate("/login", { state: "" });
        // return redirect('/login', )
    }

    return {logout}
}