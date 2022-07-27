/* eslint-disable */
import {
    AuthController,
    AuthError,
  } from "../../controller/auth.controller";
  import { TokenService } from "../../services/storage.service";
  import router from "../../router/index";
  
  const state = {
    accessToken: TokenService.getToken(),
    auth: false,
    authErrorCode: 0,
    AuthError: "",
  };
  
  const getters = {
    loggedIn: (state) => {
      return state.accessToken ? true : false;
    },

    authErrorCode: (state) => {
      return state.authErrorCode;
    },
  
    AuthError: (state) => {
      return state.AuthError;
    },
  
    auth: (state) => {
      return state.auth;
    },
  };
  
  const mutations = {
    loginRequest(state) {
      state.auth = true;
      state.AuthError = "";
      state.authErrorCode = 0;
    },
  
    loginSuccess(state, accessToken) {
      state.accessToken = accessToken;
      state.auth = false;
    },
  
    loginError(state, { errorCode, errorMessage }) {
      state.auth = false;
      state.authErrorCode = errorCode;
      state.AuthError = errorMessage;
    }
  };
  
  const actions = {
    async login({ commit }, { email, password }) {
      commit("loginRequest");
  
      try {
        const data = await AuthController.login(email, password);
        commit("loginSuccess", data.access);
        commit("userRole", data.role_code);
  
        if (data.access) {
          // Redirect the user to the page he first tried to visit or to the home view
          router.push("/home");
        } else {
          // Redirect the user to the page he first tried to visit or to the home view
          router.push("/login");
        }
  
        return true;
      } catch (e) {
        if (e instanceof AuthError) {
          commit("loginError", { errorCode: e.errorCode, errorMessage: e.message });
        }
  
        return false;
      }
    },
  
    async register({ commit }, { form }) {
      commit("loginRequest");
  
      try {
        const data = await AuthController.register(form);
        commit("loginSuccess", data);
  
        // Redirect the user to the page he first tried to visit or to the home view
        router.push("/home");
  
        return true;
      } catch (e) {
        if (e instanceof AuthError) {
          commit("loginError", {
            errorCode: e.errorCode,
            errorMessage: e.message,
          });
          AuthController.logout();
        }
  
        return false;
      }
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };