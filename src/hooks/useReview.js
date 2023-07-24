import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReview = () => {
  const { data: reviews = [], refetch } = useQuery(["review"], async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/review`);
    return res.data;
  });

  return [reviews, refetch];
};

export default useReview;
