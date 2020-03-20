import axios from "axios";
import Vue from 'vue'
import router from 'vue-router'
const http = axios.create({
  baseURL: "http://localhost:3000/admin/api"
})


http.interceptors.request.use(config => {
  // Do something before request is sent
 if(window.localStorage.getItem("token")){
   config.headers.Authorization = "Bearer " + window.localStorage.getItem("token")
 }
  return config;
}, error=> {
  // Do something with request error
  return Promise.reject(error);
});


http.interceptors.response.use( res => {
  
  return res;
}, err => {
 
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(err,111111111)
  if(err.response.data.message){
    Vue.prototype.$message({
      type:"error",
      message:err.response.data.message
    })
  }
  
  return Promise.reject(err);
});

export default http
