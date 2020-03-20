import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/admin/api/a"
})
http.interceptors.response.use( res => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return res;
}, err => {
    console.log(err)
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(err);
});

export default http
