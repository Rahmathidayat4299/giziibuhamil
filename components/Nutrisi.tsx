import 'lazysizes'
import React from 'react'
import useFetch from './Fetch'
import Delete from './Delete'
import Button from './Button'

type Props = {
	children: string
	data: 'makanan/' | 'minuman/' | 'suplement/'
	classname: string
}
const NutCard = (props: Props) => {
	const makan = useFetch(props.data)
	return (
		<>
			<div className='px-4 py-2'>
				<div className='border-2 rounded-[25px] p-5 bg-fuchsia-200 '>
					<p className='text-5xl border-b-2 border-slate-800 w-fit m-auto'>
						{props.children}
					</p>
					<div className={`grid grid-flow-col overflow-x-auto auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%]  lg:auto-cols-[25%] snap-x snap-mandatory gap-5 ${props.classname}`}>
							{
								makan.length ? makan.map((item, id) => (
									<>
										<div className="flex flex-col my-4 snap-center scroll-p-[5px] border-2 rounded-[25px] bg-pink-300">
											<img className='rounded-t-[25px] h-[225px] object-cover lazyload' src='../images/noimg.jpg' data-src={item.image} alt={item.nama} />
											<div>
												<p className='p-5' key={id}>{`${item.nama}`}</p>
												<p className='mx-5 shortened'>{item.manfaat}</p>
												<div className='flex flex-row-reverse p-5'>
													<Button className="p-[8px]  bg-slate-200 hover:bg-slate-500 hover:text-white rounded-[25px]">More Detail...</Button>
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
			<NutCard data='makanan/' classname=''>Makanan</NutCard>
			<NutCard data='minuman/' classname=''>Minuman</NutCard>
			<NutCard data='suplement/' classname=''>Suplement</NutCard>
		</>
  )
}

export default Nutrisi