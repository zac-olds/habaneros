import axios from 'axios';

// set up api url
let apiUrl

// define api urls for development and production
const apiUrls = {
  // deployed API link:
  production: "https://group4-blog-app.herokuapp.com/api",

  // development API link:
  development: "http://localhost:3000/api"
}

if (window.location.hostname === "localhost") {
  // if browser address starts with local host, the environment is in development
  apiUrl = apiUrls.development;
} else {
  // else the environment is production, use deployed API link
  apiUrl = apiUrls.production;
}

// creating a new axios instance - https://github.com/axios/axios#creating-an-instance
const api = axios.create({
  baseURL: apiUrl
});

export default api