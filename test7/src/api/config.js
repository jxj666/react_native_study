import axios from 'axios';
import qs from 'qs';

export const ERR_OK = 1;

export const ERR_ERROR = 2;

export const TOKEN_FAILE = 422;

export function configHttp() {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	if (config.method === 'post') {
	  config.data = qs.stringify(config.data);
	}
	console.log('request => ');
	console.log(config);
	return config;
  }, function (error) {
	// Do something with request error
	return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
	// Do something with response data
	console.log(axios.defaults.baseURL);
	console.log('response =>');
	console.log(response.data);
	return response;
  }, function (error) {
	// Do something with response error
	return Promise.reject(error);
  });
}