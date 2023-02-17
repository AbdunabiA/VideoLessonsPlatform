import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'


const Authenticated = ({children}) => {
    const {tokens} = useContext(AuthContext)
    console.log('Authenticated/tokens', tokens)
    const location = useLocation()
    // console.log('Authenticated/location',location)
  return tokens ? ( 
    <Navigate to={location?.state?.from ? location?.state?.from :'/'} replace/>
  ) : children
}

export default Authenticated