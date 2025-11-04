import { useSelector } from "react-redux";
import { store } from "../store/store";

export function getUrl() {
  const baseUrl = import.meta.env.VITE_BASEURL;
  const chartUrl = "";
  const wsUrl = "";
  return {
    BASEURL: baseUrl,
    WSBASEURL: wsUrl,
    CHARTURL: chartUrl,
  };
}

export function authHeader(type: boolean) {
  const state = store.getState();
  let userToken = state.auth.accessToken;
  let userId = state.auth.userId;
  let authToken = state.auth.accessToken;

  let obj = {};
  let authObj = {};

  if (userToken) {
    obj = {
      Authorization: `Bearer ${userToken}`,
    };
  }
  if (authToken && userId) {
    authObj = {
      Authorization: `Bearer ${userId} WEB ${authToken}`,
    };
  }

  return { headers: type ? obj : authObj };
}
// export const authHeader = async (type: boolean) => {};
