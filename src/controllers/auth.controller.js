import ApiService from "../services/api.service";
import { TokenService } from "../services/storage.service";

class AuthError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const AuthController = {
  login: async function(email, password, sending_method) {
    const requestData = {
      url: "`/auth/login`",
      data: {
        username: email,
        password: password
      }
    };

    try {
      const response = await ApiService.post(requestData.url, requestData.data);
      TokenService.saveToken(response.data.access_token);
      ApiService.setHeader();

      // ApiService.mount401Interceptor();

      return response.data;
    } catch (error) {
      throw new AuthError(
        error.response
      );
    }
  },

  register: async function(OTP) {
    const requestData = {
      url: "/auth/register",
      data: {
        username:username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password:country_code
      }
    };

    try {
      const response = await ApiService.post(requestData.url, requestData.data);

      TokenService.saveToken(response.data.access_token);
      ApiService.setHeader();
      return response.data;
    } catch (error) {
      throw new AuthError(error.response.status, error.response.data);
    }
  },

  logout: async function() {
    const requestData = {
      url: `logout`
    };
    try {
    //   const response = await ApiService.post(requestData.url);
      clearStorage();

      ApiService.removeHeader();

      return response;
    } catch (error) {
      throw new AuthError(
        error.response.status,
        error.response.data.message
      );
    }
  },
  clearStorage() {
    // Remove the token, role and remove Authorization header from Api Service as well
    TokenService.removeToken();
    ApiService.removeHeader();
  }
};

export default AuthController;

export { AuthController, AuthError };