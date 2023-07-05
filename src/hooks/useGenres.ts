import useData from "./useData";

export interface Genre {
  id: number;
  slug: string;
  name: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
