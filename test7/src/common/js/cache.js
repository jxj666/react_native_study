import { AsyncStorage } from 'react-native';

const USER_KEY = '__user__';

export function saveToken(token) {
  return AsyncStorage.setItem(`${USER_KEY}token`, token, (error) => {
	if (error) {
	  console.log(error);
	  return;
	}
	return Promise.resolve(null);
  });

}

export function getToken() {
  return AsyncStorage.getItem(`${USER_KEY}token`, (error, token) => {
	if (error) {
	  console.log(error);
	  return;
	}
	return Promise.resolve(token);
  });
}

export function saveUserInfo(userInfo) {
 return  AsyncStorage.setItem(`${USER_KEY}info`, JSON.stringify(userInfo), (error) => {
   if(error) {
     console.log(error);
     return
   }
   return Promise.resolve(null);
 });
}

export function getUserInfo() {
  return AsyncStorage.getItem(`${USER_KEY}info`, (error, info) => {
	if (error) {
	  console.log(error);
	  return;
	}
	return Promise.resolve(info);
  });
}

export function clearTokenAndUserInfo() {
  const keyarr = ['__user__token', '__user__info'];

  return AsyncStorage.multiRemove(keyarr, (error) => {
    if(error) {
	  console.log(error);
      return;
	}
	return Promise.resolve(null);
  });
}