import useData from "./useData";

export interface Platforms {
  id: number;
  slug: string;
  name: string;
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
