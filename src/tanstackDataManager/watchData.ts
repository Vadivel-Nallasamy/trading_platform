import { useMutation, useQuery } from "@tanstack/react-query";
import watchServices from "../services/watchServices";

export const useGetWatchlist = () => {
  return useQuery({
    queryKey: ["watchlist_data"],
    queryFn: watchServices.getWatchlist,
    refetchOnWindowFocus: false,
    refetchOnMount: "always",

    // enabled: false,
  });
};
export const useGetPredefinedList = () => {
  return useQuery({
    queryKey: ["predefined_list"],
    queryFn: watchServices.getPredefinedList,
    refetchOnWindowFocus: false,
    // refetchOnMount: "always",
    enabled: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};
