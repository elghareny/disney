/** @format */

import axios from "axios";

export const movieBaseUrl = "https://api.themoviedb.org/3";
export const api_key = "8414f68967c17dabe642ca8d72d12316";

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
const getTrendingVideos = axios.get(
	`${movieBaseUrl}/trending/all/day?api_key=${api_key}`,
);
const getMovieByGenreId = (id) =>
	axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {getTrendingVideos, getMovieByGenreId};
