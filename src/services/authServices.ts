import axios from "axios";
import { authHeader, getUrl } from "./env";

const AXIOS = () => {
  return axios.create({
    baseURL: getUrl().BASEURL,
  });
};

async function verifyUser(userid: Object) {
  const res = await AXIOS().post(
    "omt/auth/access/client/verify",
    userid,
    authHeader(false)
  );
  if (
    res.status == 200 &&
    res.data.status == "Ok" &&
    res.data.message == "Success"
  ) {
    return res.data.result;
  } else {
    throw new Error("Not sure what happened");
  }
}
async function verifyPassword(payload: Object) {
  const res = await AXIOS().post(
    "omt/auth/access/pwd/validate",
    payload,
    authHeader(false)
  );
  if (
    res.status == 200 &&
    res.data.status == "Ok" &&
    res.data.message == "Success"
  ) {
    return res.data.result;
  } else {
    throw new Error("Not sure what happened");
  }
}
async function verifyOtp(payload: Object) {
  const res = await AXIOS().post(
    "omt/auth/access/otp/validate",
    payload,
    authHeader(false)
  );
  if (
    res.status == 200 &&
    res.data.status == "Ok" &&
    res.data.message == "Success"
  ) {
    return res.data.result;
  } else {
    throw new Error("Not sure what happened");
  }
}
async function sendOtp(payload: Object) {
  const res = await AXIOS().post(
    "omt/auth/access/otp/send",
    payload,
    authHeader(false)
  );
  if (
    res.status == 200 &&
    res.data.status == "Ok" &&
    res.data.message == "Success"
  ) {
    return res.data.result;
  } else {
    throw new Error("Not sure what happened");
  }
}
const authServices = {
  verifyUser,
  verifyPassword,
  verifyOtp,
  sendOtp,
};
export default authServices;
