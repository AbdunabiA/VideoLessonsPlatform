import axios from 'axios'
import {sleep} from '../utils/sleep'

const tokens = JSON.parse(localStorage.getItem("tokens"));

const Axios = axios.create({
  baseURL: "https://onlineteachingplatform.pythonanywhere.com",
  headers: { Authorization: `Bearer ${tokens?.access}` },
});

const refreshAccesToken = async (refreshToken) =>{
  try {
    const res = axios.post("https://onlineteachingplatform.pythonanywhere.com/refresh-token/", {refresh:refreshToken});
    return res
  }catch(err){
    console.log(err)
    return err
  }
}

Axios.interceptors.request.use(
  async (config)=>{
    let currentDate = new Date()
    const refreshArr = tokens?.refresh.split(".");
    const refreshExpiry = refreshArr && new Date(JSON.parse(atob(refreshArr[1])).exp * 1000);
    const accessArr = tokens?.access.split(".");
    const accessExpiry = accessArr && new Date(JSON.parse(atob(accessArr[1])).exp * 1000);
    console.log("api/refresh", refreshExpiry);
    if (accessExpiry>currentDate && refreshExpiry < currentDate) {
      const res = await refreshAccesToken(tokens.refresh);
      //save the tokens to locale storage
      localStorage.setItem("tokens", JSON.stringify(res.data));
      //update the auth context
      dispatch({ type: "LOGIN", payload: res.data });
      config.headers["Authorization"] = `Bearer ${res.data.access}`;
    }
    return config
}, (err)=>{
      return Promise.reject(err)
})

export const getCourse = async () => {
  // try{
    const res = await Axios.get("/courses");
    return res;
  // }catch(err){
  //   console.log('api', err)
  //   return err
  // }
  
};

export const getVideos = async () => {
  return null
}
export const getVideo = async (id) => {
    // sleep(3000)
    return id
}
export const getOquvVideo = async (id) => {
  return id;
};
export const getYangiliklar = async () => {
  return null;
};
export const getYangilik = async (id) => {
  // setTimeout(() => {
  //   return id;
  // }, 3000);
  return id
};
