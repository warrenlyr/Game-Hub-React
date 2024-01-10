import { GenreData } from "./GenreData";
import { Platform } from "./Platform";

export interface GameData {
  id: number;
  name: string;
  slug: string;
  genres: GenreData[];
  publishers: { name: string, id: string }[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw: string;
}
