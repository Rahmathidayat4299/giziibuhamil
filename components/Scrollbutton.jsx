import React, { useEffect } from 'react'
import Image from './Image.tsx'

const Scrollbutton = () => {
	const clicked = () => {
			document.querySelector('.scrolled').addEventListener('click', e => {
					window.scrollTo(0,0)
			})
	}
	useEffect(() => {
			clicked()
	}, [])
  return (
    <>
			<button className='scrolled fixed bottom-[6vw] right-[2vw] rounded-full border-2 bg-slate-100'>
				<Image/>
			</button>
    </>
  )
}

export default Scrollbutton