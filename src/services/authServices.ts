import axios from "axios";
import { authHeader, getUrl } from "./env";

const AXIOS = () => {
  return axios.create({
    baseURL: getUrl().BASEURL,
  });
};

function verifyUser(userid: Object) {
  return AXIOS().post(
    "omt/auth/access/client/verify",
    userid,
    authHeader(false)
  );
}

const authServices = {
  verifyUser,
};
export default authServices;
