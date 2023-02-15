import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"

export const useLogOut = () => {
    const  { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const logout = () => {
        // Delete tokens from localeStorage
        localStorage.removeItem('tokens')

        //dispatch logout action
        dispatch({type:'LOG_OUT'})

        navigate('/login')
    }

    return {logout}
}