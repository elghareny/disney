/** @format */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const api_key = "8414f68967c17dabe642ca8d72d12316";

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const initialState = [];
export const MoviesSlice = createSlice({
	name: "Movies",
	initialState,
	// extraReducers: ( builder ) = {
	// 	builder.addCase(),
	// }
});

export const fetchMovieByGenreId = createAsyncThunk(async (id) => {
	const response = await fetch(`${movieByGenreBaseURL}&with_genres=${id}`);
	const data = await response.json();
	console.log(data);
	return data;
});
