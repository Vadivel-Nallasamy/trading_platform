import { useQuery } from "@tanstack/react-query";
import authServices from "../services/authServices";
import fetchEvents from "./factoryFetch/factoryFetch";

const verifyClient = useQuery({
  queryKey: ["verifyUser"],
  queryFn: fetchEvents,
});
const authData = {
  verifyClient,
};
export default authData;
