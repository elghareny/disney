/** @format */

import {useEffect, useRef, useState} from "react";
import GlobalApi from "../../Services/GlobalApi/GlobalApi";
import MovieCard from "../movieCard/MovieCard";
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";

function MoviesList(genreId) {
	const [lists, setLists] = useState([]);

	const elementRef = useRef(null);
	const screenWindow = window.innerWidth;

	const getMovieByGenreId = async () => {
		await GlobalApi.getMovieByGenreId(genreId.genreId).then((res) => {
			setLists(res.data.results);
		});
	};

	useEffect(() => {
		getMovieByGenreId();
	}, []);

	const sliderRight = (e) => {
		e.scrollLeft += screenWindow - 500;
	};
	const sliderLeft = (e) => {
		e.scrollLeft -= screenWindow - 500;
	};

	return (
		<div className='relative'>
			<IoChevronBackOutline
				onClick={() => sliderLeft(elementRef.current)}
				className='text-[50px] text-white p-1 z-10 cursor-pointer max-md:hidden block absolute top-1/2 -left-8 transform translate-y-[-50%]'
			/>
			<div
				ref={elementRef}
				className='flex overflow-x-auto gap-8 scrollbar-none py-5 px-3 scroll-smooth'>
				{lists &&
					lists.map((item, id) => {
						return (
							<MovieCard
								movie={item}
								key={id}
							/>
						);
					})}
			</div>
			<IoChevronForwardOutline
				onClick={() => sliderRight(elementRef.current)}
				className='text-[50px] text-white p-1 z-10 cursor-pointer max-md:hidden block absolute top-1/2 -right-11 transform translate-y-[-50%]'
			/>
		</div>
	);
}

export default MoviesList;
