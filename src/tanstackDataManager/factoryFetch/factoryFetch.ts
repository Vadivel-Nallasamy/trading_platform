import authServices from "../../services/authServices";

const fetchEvents = async (func: any) => {
  const json = {
    userId: "INVCLIENT5",
  };
  const response: any = await authServices.verifyUser(json);
  if (!response.ok) {
    const error: any = new Error("sometin went wrong");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { events } = await response.json();
  return events;
};
export default fetchEvents;
