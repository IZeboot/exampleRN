import axios from 'axios';
const addCommonHeader = (authorization) => {
  axios.defaults.headers.common.Accept = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
};

class HttpHelpers {
  post = async (url, params, onSuccess, onFail, authorization = false) =>{
    params._t = new Date().getTime();
    const {urlProcess} = common.getURL(url, params);
    addCommonHeader(authorization)
    return await axios.post(urlProcess, params)
      .then((response) =>{
        if(onSuccess){
          onSuccess(response);
        }
        return response;
      }).catch((error) =>{
        console.log("error", error);
        if(onFail){
          error && onFail(error);
        }
        return error;
      })
  };
}

export default new HttpHelpers()

