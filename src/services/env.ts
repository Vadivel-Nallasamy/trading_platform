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
  let userToken = "";
  let userId = "";
  let authToken = "";

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
