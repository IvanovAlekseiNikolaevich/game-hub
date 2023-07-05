import useData from "./useData";

interface Platforms {
  id: number;
  slug: string;
  name: string;
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
