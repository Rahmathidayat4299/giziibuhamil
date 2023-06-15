import React, { useEffect } from 'react'

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
			<button className='scrolled fixed bottom-[5vw] right-[2vw]'>
				<img src='../images/up-arrow.png' alt="Arrow Up" />
			</button>
    </>
  )
}

export default Scrollbutton