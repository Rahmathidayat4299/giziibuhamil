import React, { useEffect }from 'react'

type Props = {
	loc: 'protein' | 'kalsium' | 'Asam' | 'Besi'
} 

const Readmore = (props : Props) => {
	const open = () => {
		window.location.href = `/nutrisi#${props.loc}`
	}
	return (
	<>
		<div className="w-full flex justify-end">
			<button className={`focus:outline-nonez focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer`} onClick={() => open()}>
				<span className=" text-base tracking-wide text-indigo-700">
						Read more
				</span>
				<svg
					className="ml-3 lg:ml-6 text-indigo-700"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="18"
					viewBox="0 0 20 18"
					fill="none"
				>
					<path
					d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					></path>
					<path
					d="M1 8.53662H19"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					></path>
				</svg>
        	</button>
		</div>
  	</>
  )
}

export default Readmore