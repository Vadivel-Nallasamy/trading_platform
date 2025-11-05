import axios from "axios";
import { authHeader, getUrl } from "./env";

const AXIOS = () =>
  axios.create({
    baseURL: getUrl().BASEURL,
  });
async function getWatchlist() {
  const res = await AXIOS().get(
    "omt/mw-rest/marketWatch/getAllMwScrips",
    authHeader(true)
  );
  if (
    res.status == 200 &&
    res.data.status == "Ok" &&
    res.data.message == "Success" &&
    res.data.result &&
    res.data.result.length > 0
  ) {
    return res.data.result;
  } else {
    throw new Error("Uh! Oh!!!");
  }
}
const watchServices = {
  getWatchlist,
};
export default watchServices;
