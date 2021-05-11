import { request, addInterceptor, showToast } from "@tarojs/taro";
import domain from "../config/config";

const SUCCESS = 200;

const ERROR = [-1, 500, 403];

const AUTH = 401;

const interceptor = function(chain) {
  const requestParams = chain.requestParams;
  requestParams.url = domain + requestParams.url;
  const { method, data, url } = requestParams;

  console.log(`http ${method || "GET"} --> ${url} data: `, data);

  return chain.proceed(requestParams).then(res => {
    if (res.statusCode !== 200) {
      showToast({
        title: "服务器异常",
        icon: "success",
        duration: 2000
      });
      return false;
    } else {
      if (res.data.code !== SUCCESS) {
        if (ERROR.includes(res.data.code)) {
          showToast({
            title: res.data.text,
            icon: "none",
            duration: 2000
          });
        }
      } else {
        
      }
      return res.data;
    }
  });
};
addInterceptor(interceptor);
export default request;

// Taro.request({ url })
