import { Storage } from "./storage";

const TOKEN_KEY = "access_token";
const USER_EMAIL = "user_email";
const REFRESH_TOKEN_KEY = "refresh_token";
const ROLE = "role";
const USER_ID = "user_id";
const EXPIRE_IN = "expire_in";

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to Storage. Local Storage should always be
 * accessed through this instace.
 **/
const TokenService = {

  getToken() {
    return Storage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken) {
    Storage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    Storage.removeItem(TOKEN_KEY);
  },

  /**
   * End of operation of access roken
   */

  getRefreshToken() {
    return Storage.getItem(REFRESH_TOKEN_KEY);
  },

  saveRefreshToken(refreshToken) {
    Storage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },

  removeRefreshToken() {
    Storage.removeItem(REFRESH_TOKEN_KEY);
  },

/*
Save emaill in forgot pass
*/

getUserEmail() {
  return (Storage.getItem(USER_EMAIL));
},

saveUserEmail(email) {
  Storage.setItem(USER_EMAIL, email);
  // console.log(email);
},
removeUserEmail() {
  Storage.removeItem(USER_EMAIL);
},

/**
   * End of operation of refresh token
*/

  getRole() {
    return (Storage.getItem(ROLE));
  },

  saveRole(role) {
    Storage.setItem(ROLE, EncryptDecrypt.encrypt(role));
  },
  removeRole() {
    Storage.removeItem(ROLE);
  },

  getUserId() {
    return (Storage.getItem(USER_ID));
  },

  saveUserId(user_id) {
    Storage.setItem(USER_ID, user_id);
  },
  removeUserId() {
    Storage.removeItem(USER_ID);
  },

  /**
   * End of operation of role
   */

  /**
   * End of operation of token type
   */

  getExpireIn() {
    return Storage.getItem(EXPIRE_IN);
  },

  saveExpireIn(ExpireIn) {
    Storage.setItem(EXPIRE_IN, ExpireIn);
  },
  removeExpireIn() {
    Storage.removeItem(EXPIRE_IN);
  },
};

export { TokenService };