import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import axios from "axios";
const useEnroll = () => {
  // const { user } = useContext(AuthContext);
  const { user, loading } = useAuth();

  const { refetch, data: enrolls = [] } = useQuery({
    queryKey: ["enroll", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/myEnroll?email=${user?.email}`
      );
      console.log("res from axios", res);

      return res.data;
    },
  });

  return [enrolls, refetch];
};
export default useEnroll;
