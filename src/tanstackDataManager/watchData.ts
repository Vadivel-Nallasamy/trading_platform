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
