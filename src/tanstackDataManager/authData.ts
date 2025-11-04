import { useMutation, useQuery } from "@tanstack/react-query";
import authServices from "../services/authServices";

const verifyClient = () => {
  return useMutation({
    mutationKey: ["verifyUser"],
    mutationFn: authServices.verifyUser,
  });
};
const verifyPassword = () => {
  return useMutation({
    mutationKey: ["verifyPassword"],
    mutationFn: authServices.verifyPassword,
  });
};
const verifyOtp = () => {
  return useMutation({
    mutationKey: ["verifyOtp"],
    mutationFn: authServices.verifyOtp,
  });
};
const sendOtp = () => {
  return useMutation({
    mutationKey: ["sendOtp"],
    mutationFn: authServices.sendOtp,
  });
};
const authData = {
  verifyClient,
  verifyPassword,
  verifyOtp,
  sendOtp,
};
export default authData;
