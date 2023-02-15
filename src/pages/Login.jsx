import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { AuthContext } from '../context/AuthContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const navigate = useNavigate()
  const context = useContext(AuthContext);
  const location = useLocation()
  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(name, password)
    console.log(location);
    if(location.state.from){
      navigate(location.state.from);
    }else{
      navigate("/");
    }
    

    console.log('error',error)
    
    // console.log('in fun',context);
    // console.log("in fun", hook);
  }
  // console.log('com', context.tokens);
  // console.log("com", hook);
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[url('./src/assets/webDiary.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-[70vh] backdrop-blur-lg shadow-2xl rounded-lg ">
        <form
          className="mt-[20%] flex flex-col items-center space-y-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white text-2xl">Something</h1>
          <input
            type="text"
            className="rounded w-[70%] focus:outline-none p-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            className="rounded w-[70%] focus:outline-none p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            // onClick={handle}
            // onClick={() => navigate("/boshsahifa", { replace: true })}
            className="bg-gradient-to-r from-[#212cf1] to-[#0975f1] text-white py-4 px-10 rounded-lg shadow-md group relative overflow-hidden"
            // disabled={isLoading}
          >
            <span className="absolute w-0 h-full top-0 left-0 bg-gradient-to-r from-[#0975f1] to-[#212cf1] group-hover:w-full duration-1000"></span>

            <span className="relative">
              {isLoading ? "LOADING..." : "LOGIN"}
            </span>
          </button>
          {error?.data?.detail && (
            <p className="text-center text-red-500">
              Error ocured:{error?.data?.detail}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login