import React from 'react'
import useFetch from './Fetch'
import Delete from './Delete'

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
				<div className='border-2 p-5'>
					{props.children}
					<div className={`grid grid-flow-col overflow-x-auto auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%]  lg:auto-cols-[25%] snap-x snap-mandatory ${props.classname}`}>
							{
								makan.length ? makan.map((item, id) => (
									<>
										<div className="flex flex-col p-4 my-4 border-2 snap-center scroll-p-[5px]">
											<p key={id}>{`${item.nama}`}</p>
											<img className='py-5' src={item.image} alt={props.data} />
											<p className='shortened border-2'>{item.manfaat}</p>
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