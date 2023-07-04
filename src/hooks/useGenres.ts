import { useEffect, useState } from "react";
import apiClient from "../services /api/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  slug: string;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genresss", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
