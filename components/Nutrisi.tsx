import 'lazysizes'
import React from 'react'
import useFetch from './Fetch'
import Delete from './Delete'
import Button from './Button'
import 'lazysizes'

type Props = {
	children: string
	data: 'makanan/' | 'minuman/' | 'suplement/'
	classname: string
	width: string
}
const NutCard = (props: Props) => {
	const makan = useFetch(props.data)
	return (
		<>
			<div className={`px-4 py-2 ${props.width}`}>
				<div className='border-2 rounded-[25px] p-5 bg-fuchsia-200 '>
					<p className='text-5xl border-b-2 border-slate-800 w-fit m-auto'>
						{props.children}
					</p>
					<div className={`grid grid-flow-col overflow-x-auto snap-x snap-mandatory gap-5 ${props.classname}`}>
							{
								makan.length ? makan.map((item, id) => (
									<>
										<div className="flex flex-col my-4 snap-center scroll-p-[5px] border-2 rounded-[25px] bg-pink-300">
											<img className='rounded-t-[25px] h-[225px] object-cover lazyload' src='https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg' data-src={item.image} alt={item.nama} />
											<div>
												<p className='px-5 py-3 bg-indigo-600 text-white' key={id}>{`${item.nama}`}</p>
												<p className='m-5 shortened'>{item.manfaat}</p>
												<div className='flex flex-row-reverse p-5'>
													<Button className="py-3 px-5  bg-slate-200 hover:bg-slate-500 hover:text-white rounded-[25px]">More Detail...</Button>
												</div>
											</div>
										</div>
									</>
								)) : null
							}
					</div>
				</div>
			</div>
		</>
	)

}
const Nutrisi = () => {
  return (
		<>
			<NutCard width="" data='makanan/' classname='auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%]  lg:auto-cols-[25%]'>Makanan</NutCard>
			<div className='flex bg-slate-200 h-[50%]'>
				<img className='max-w-[40%] p-5 hidden lg:block object-cover lazyload' src='https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg' data-src="https://1.bp.blogspot.com/-V8GKAf0VIG0/XEA7S5lJEOI/AAAAAAAARoU/4jLDZL0hyO8TkzbDKO-pL4lOvJjDLWUiwCLcBGAs/s1600/Vector%2BOrang%2BHamil.png" alt="PregnantWoman" />
				<NutCard width="w-[100%] lg:w-[60%] m-auto" data='minuman/' classname='auto-cols-[100%] lg:auto-cols-[50%]'>Minuman</NutCard>
			</div>
			<div className='flex'>
				<NutCard width="w-[100%] lg:w-[60%] m-auto" data='suplement/' classname='auto-cols-[100%] lg:auto-cols-[50%]'>Suplement</NutCard>
				<img className='max-w-[40%] mx-auto p-5 hidden lg:block object-cover lazyload' src='https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg' data-src="https://png.pngtree.com/png-clipart/20210314/original/pngtree-mother-s-day-mom-pregnant-with-love-png-image_6100876.png" alt="PregnantWoman" />
			</div>
		</>
  )
}

export default Nutrisi