import service from "./index";
/**
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @param {Object} config  请求的配置
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */

export const request = ({ method, url, data, config }) => {
  //把大写转换成小写
  method = method.toLowerCase();
  if (method == "post") {
    return service.post(url, data, { ...config });
  } else if (method == "get") {
    return service.get(url, {
      params: data,
      ...config,
    });
  } else if (method == "delete") {
    return service.delete(url, {
      params: data,
      ...config,
    });
  } else if (method == "put") {
    return service.put(url, data, { ...config });
  } else {
    console.error("未知的method" + method);
    return false;
  }
};
