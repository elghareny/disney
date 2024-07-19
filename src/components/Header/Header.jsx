/** @format */

import logo from "../../assets/Images/logo.png";
import avatar from "../../assets/avatar.jpg";
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from "react-icons/hi2";

import {HiPlus, HiDotsVertical} from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import {useState} from "react";

function Header() {
	const [toggle, setToggle] = useState(false);
	const menu = [
		{
			name: "Home",
			icon: HiHome,
		},
		{
			name: "Search",
			icon: HiMagnifyingGlass,
		},
		{
			name: "Watch List",
			icon: HiPlus,
		},
		{
			name: "Originals",
			icon: HiStar,
		},
		{
			name: "Movies",
			icon: HiPlayCircle,
		},
		{
			name: "Series",
			icon: HiTv,
		},
	];
	return (
		<div className='flex items-center justify-between p-3 px-5 m-auto'>
			<div className='flex items-center gap-0'>
				<img
					className='w-[100px] object-cover'
					src={logo}
					alt=''
				/>
				<div className='max-md:hidden md:flex gap-1'>
					{menu.map((item, index) => (
						<HeaderItem
							key={index}
							name={item.name}
							Icon={item.icon}
						/>
					))}
				</div>
				<div className='flex md:hidden '>
					{menu.map(
						(item, index) =>
							index < 3 && (
								<HeaderItem
									key={index}
									name={""}
									Icon={item.icon}
								/>
							),
					)}
				</div>
				<div
					className='md:hidden'
					onClick={() => setToggle(!toggle)}>
					<HeaderItem
						name={""}
						Icon={HiDotsVertical}
					/>
					{toggle ? (
						<div className=' flex flex-col gap-2 bg-[#121212] absolute mt-3 border-gray-700 border-[1px] max-md:p-2 max-sm:text-[10px] max-md:text-[10px] z-50'>
							{menu.map(
								(item, index) =>
									index > 2 && (
										<HeaderItem
											key={index}
											name={item.name}
											Icon={item.icon}
										/>
									),
							)}
						</div>
					) : null}
				</div>
			</div>
			<img
				className='w-[45px] rounded-full'
				src={avatar}
				alt=''
			/>
		</div>
	);
}

export default Header;
