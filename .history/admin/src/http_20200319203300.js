import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/admin/api"
})
http.interceptors.response.use( res => {
  
  return res;
}, err => {
  console.log(err.response.data)
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(err);
});

export default http
