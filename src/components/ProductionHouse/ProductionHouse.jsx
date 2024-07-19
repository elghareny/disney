/** @format */

import React from "react";

import disney from "../../assets/Images/disney.png";
import marvel from "../../assets/Images/marvel.png";
import nationalG from "../../assets/Images/nationalG.png";
import pixar from "../../assets/Images/pixar.png";
import starwar from "../../assets/Images/starwar.png";

import disneyv from "../../assets/Videos/disney.mp4";
import marvelv from "../../assets/Videos/marvel.mp4";
import nationalGv from "../../assets/Videos/national-geographic.mp4";
import pixarv from "../../assets/Videos/pixar.mp4";
import starwarv from "../../assets/Videos/star-wars.mp4";

function ProductionHouse() {
	const productionList = [
		{
			id: 1,
			image: disney,
			video: disneyv,
		},
		{
			id: 2,
			image: marvel,
			video: marvelv,
		},
		{
			id: 3,
			image: nationalG,
			video: nationalGv,
		},
		{
			id: 4,
			image: pixar,
			video: pixarv,
		},
		{
			id: 5,
			image: starwar,
			video: starwarv,
		},
	];
	return (
		<div className='flex gap-5 py-2 m-auto w-[90%] container '>
			{productionList.map((item, index) => (
				<div
					key={index}
					className='relative border-[2px] border-gray-700 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black bg-gray-900'>
					<video
						src={item.video}
						muted
						autoPlay
						playsInline
						loop
						className='absolute top-0 rounded-lg opacity-0 transition-all duration-300 ease-in-out hover:opacity-80'></video>
					<img
						className='w-full'
						src={item.image}
						alt=''
					/>
				</div>
			))}
		</div>
	);
}

export default ProductionHouse;
