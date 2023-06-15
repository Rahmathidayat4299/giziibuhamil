import React from 'react'
import Pict from 'next/image'
import arrow from '../images/up-arrow.png'

const Image = () => {
  return (
    <div>
			<Pict
        className='min-w-[44px] min-h-[44px] p-[10px]'
				src={arrow}
				alt="Picture of the author"
        width={44}
        height={44}
			/>
    </div>
  )
}

export default Image