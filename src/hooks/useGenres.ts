import useData from "./useData";

export interface Genre {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genresss");

export default useGenres;
