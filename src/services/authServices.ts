import axios from "axios";

const AXIOS = () => {
  return axios.create({
    baseURL: "https://uattrade.ashikagroup.com/",
  });
};

function verifyUser(userid: Object) {
  return;
}
