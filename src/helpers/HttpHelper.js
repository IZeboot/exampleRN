import axios from 'axios';
const addCommonHeader = (authorization) => {
  axios.defaults.headers['Content-Type'] = 'application/json';
};

class HttpHelpers {
  static post = async (url, params, onSuccess, onFail, authorization = false) =>{
    params._t = new Date().getTime();
    console.log(params, url)
    addCommonHeader(authorization)
    return await axios.post(url, params)
  };
}

export default HttpHelpers

