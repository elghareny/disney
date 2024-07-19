/** @format */

import React from "react";

function MovieCard({id, movie}) {
	const Image_Base_URL = "https://image.tmdb.org/t/p/original";

	return (
		<>
			<img
				className='max-md:w-[150px] w-[250px] rounded-lg object-cover max-md:h-[110px] h-[180px]
                hover:border-[3px] border-gray-400 hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out
                '
				key={id}
				src={`${Image_Base_URL}${movie.backdrop_path}`}
				alt=''
			/>
		</>
	);
}

export default MovieCard;
