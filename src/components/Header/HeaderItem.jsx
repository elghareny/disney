/** @format */

function HeaderItem({name, Icon}) {
	return (
		<div className='flex  items-center justify-start px-3 py-2 text-[16px] font-semibold cursor-pointer rounded-lg text-white hover:bg-gray-800 transition-all duration-150 ease-linear'>
			<Icon className='m-1' />
			<h2>{name}</h2>
		</div>
	);
}

export default HeaderItem;
