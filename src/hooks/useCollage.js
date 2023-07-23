import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCollage = () => {
  const { data: collages = [], refetch } = useQuery(["collage"], async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/collage`);
    return res.data;
  });

  return [collages, refetch];
};

export default useCollage;
