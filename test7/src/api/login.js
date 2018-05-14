import axios from 'axios';

export function sendSms(username) {
  const url = '/api/account/send_sms.jhtml';

  return axios.get(url, {
	params: {
	  username: username,
	  smsType: 'memberLogin'
	}
  }).then((res) => {
	return Promise.resolve(res.data);
  });
}

export function loginSms(username, smsCode) {
  const url = '/api/account/login.jhtml';

  return axios.post(url, {
	username: username,
	smsCode: smsCode
  }).then((res) => {
	return Promise.resolve(res.data);
  });
}