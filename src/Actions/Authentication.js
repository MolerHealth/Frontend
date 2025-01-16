import axios from "axios";
import { getCookie } from "./Csrf";
import { refreshToken, LogoutAction } from "./Authentication";
import store from "../Store/Store";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie("csrftoken");
    if (token) {
      config.headers["X-CSRFToken"] = token;
    }
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let refreshSubscribers = [];

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = (token) => {
  refreshSubscribers.forEach((callback) => callback(token));
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 errors gracefully
    if (error.response && error.response.status === 401) {
      // Check if the error is due to an expired or invalid token
      if (
        error.response.data.detail === "Token is invalid or expired" &&
        !originalRequest._retry
      ) {
        // If refresh is not already happening, initiate it
        if (!isRefreshing) {
          originalRequest._retry = true;
          isRefreshing = true;

          try {
            // Attempt to refresh the token
            const { newAccessToken } = await store.dispatch(refreshToken());
            isRefreshing = false;

            // Update the authorization headers and retry original requests
            localStorage.setItem("access", newAccessToken);
            onRefreshed(newAccessToken);

            // Retry the original request with the new token
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          } catch (err) {
            isRefreshing = false;

            console.error("Failed to refresh token:", err);
            if (
              err.response &&
              err.response.data.detail === "Token is invalid or expired"
            ) {
              store.dispatch(LogoutAction());
            }

            return Promise.reject(err);
          }
        }

        // If a refresh request is in progress, wait for it to complete
        return new Promise((resolve) => {
          addRefreshSubscriber((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            resolve(instance(originalRequest));
          });
        });
      } else {
        // If the refresh token itself is invalid or missing, log out
        store.dispatch(LogoutAction());
      }
    }

    // Log all other errors
    // console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

export default instance;
