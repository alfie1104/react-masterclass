const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;

  // adult: false;
  // genre_ids: [28, 12, 878];
  // original_language: "en";
  // original_title: "Spider-Man: No Way Home";
  // popularity: 8817.063;
  // release_date: "2021-12-15";
  // video: false;
  // vote_average: 8.4;
  // vote_count: 3427;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
