/** @format */

import {useEffect, useRef, useState} from "react";
import GlobalApi from "../../Services/GlobalApi/GlobalApi";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";

function Slider() {
	const [movieList, setMovieList] = useState([]);
	const Image_Base_URL = "https://image.tmdb.org/t/p/original";
	const elementRef = useRef();
	const screenWindow = window.innerWidth;

	useEffect(() => {
		getTrendingMovies();
	}, []);

	const getTrendingMovies = () => {
		GlobalApi.getTrendingVideos.then((res) => {
			setMovieList(res.data.results);
		});
	};

	const sliderRight = (e) => {
		e.scrollLeft += screenWindow - 125;
	};
	const sliderLeft = (e) => {
		e.scrollLeft -= screenWindow - 125;
	};
	return (
		<div className='relative'>
			<HiChevronLeft
				onClick={() => sliderLeft(elementRef.current)}
				className=' w-12 h-12 max-md:hidden text-white text-[30px] absolute top-1/2 transform translate-y-[-50%] left-7 cursor-pointer'
			/>
			<HiChevronRight
				onClick={() => sliderRight(elementRef.current)}
				className=' w-12 h-12 max-md:hidden  text-white text-[30px] absolute top-1/2 transform translate-y-[-50%] right-7 cursor-pointer'
			/>
			<div
				className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth '
				ref={elementRef}>
				{movieList.map((movie) => (
					<img
						key={movie.id}
						className='min-w-full max-h-[calc(100vh-280px)] object-cover object-left-top  mr-5 rounded-md hover:border-[3px] border-gray-400 transition-all duration-100 ease-linear'
						src={`${Image_Base_URL}${movie.backdrop_path}`}
						alt={movie.title}
					/>
				))}
			</div>
		</div>
	);
}

export default Slider;
