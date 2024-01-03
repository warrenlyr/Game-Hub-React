import useData from "./useData";

export interface GenreData {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<GenreData>("/genres");

export default useGenres;
