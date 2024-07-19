/** @format */

import genres from "../../Constant/GenresList";

import MoviesList from "../MoviesList/MoviesList";

function GenreMovieList() {
	return (
		<div>
			{genres.map(
				(item, index) =>
					index < 6 && (
						<div
							key={item.id}
							className='p-8 max-md:px-8 px-16'>
							<h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
							<MoviesList genreId={item.id} />
						</div>
					),
			)}
		</div>
	);
}

export default GenreMovieList;
