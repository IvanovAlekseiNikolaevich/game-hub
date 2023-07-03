import { useEffect, useState } from "react";
import apiClient from "../services /api/api-client";
import { CanceledError } from "axios";

export interface Games {
  id: number;
  name: string;
  background_image: string;
}
interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/gamessss", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
