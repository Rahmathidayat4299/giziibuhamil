import 'lazysizes'
import React,{ useEffect, useState } from 'react'
import { useFetch, useFetchId } from './Fetch'
import Button from './Button'

type Props = {
	children: string
	data: 'makanan/' | 'minuman/' | 'suplement/'
	classname: string
	width?: string
	trimester?: string
}
const NutCard = (props: Props) => {
	const alltype = useFetch(props.data)
	return (
		<>
			<div className={`px-4 py-2 ${props.width}`}>
				<div className='border-2 rounded-[25px] p-5 bg-fuchsia-200 '>
					<p className='text-5xl underline text-center'>
						{props.children}
					</p>
					<div className={`grid grid-flow-col overflow-x-auto snap-x snap-mandatory gap-5 ${props.classname}`}>
							{
								alltype.length ? alltype.map((item, id) => (
									<>
										<div className="flex flex-col my-4 snap-center scroll-p-[5px] border-2 rounded-[25px] bg-pink-300">
											<img className='rounded-t-[25px] h-[225px] object-cover lazyload' src='https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg' data-src={item.image} alt={item.nama} />
											<div>
												<div className='bg-indigo-600 px-5 py-2 flex flex-row justify-between'>
													<p className='text-white' key={id}>{`${item.nama}`}</p>
													<p className='text-white'>{props.trimester}{item.trimester}</p>
												</div>
												<div className='mx-5 mt-5 flex flex-row justify-between'>
													<p>{item.gizi ? 'kalori: ' + item.gizi.kalori : ''}</p>
													<p>{item.gizi ? 'karbohidrat: ' + item.gizi.karbohidrat : ''}</p>
												</div>
												<div className='mx-5 mt-5  flex flex-row justify-between'>
													<p>{item.gizi ? 'lemak: ' + item.gizi.lemak : ''}</p>
													<p>{item.gizi ? 'protein: ' + item.gizi.protein : ''}</p>
												</div>
												<div className='mx-5 mt-5  flex flex-row justify-between'>
													<p>{item.gizi ? 'vitamin: ' + item.gizi.vitamin : ''}</p>
												</div>
												<p className='m-5'>{item.manfaat}</p>
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

const NutSuppCard = (props: Props) => {
	const alltype = useFetch(props.data)
	return (
		<>
			<div className={`px-4 py-2 ${props.width}`}>
				<div className='border-2 rounded-[25px] p-5 bg-fuchsia-200 '>
					<p className='text-5xl underline text-center'>
						{props.children}
					</p>
					<div className={`grid grid-flow-col overflow-x-auto snap-x snap-mandatory gap-5 ${props.classname}`}>
							{
								alltype.length ? alltype.map((item, id) => (
									<>
										<div className="flex flex-col my-4 snap-center scroll-p-[5px] border-2 rounded-[25px] bg-pink-300">
											<img className='rounded-t-[25px] h-[225px] object-cover lazyload' src='https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg' data-src={item.image} alt={item.nama} />
											<div>
												<div className='bg-indigo-600 px-5 py-2 flex flex-row justify-between'>
													<p className='text-white' key={id}>{`${item.nama}`}</p>
													<p className='text-white'>{props.trimester}{item.trimester}</p>
												</div>
												<p className='m-5'>{item.manfaat}</p>
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
			<div className='m-5'>
				<h1 className='text-[10vw] hidden sm:block font-bold text-center m-5 rounded-t-[1px]'>NUTRISI</h1>
				<div className='bg-gray-300 rounded-t-[25px] flex flex-col'>
					<h1 className='text-4xl font-bold  text-center bg-slate-400 p-5 rounded-t-[25px]'>Apa itu <i>Nutrisi</i>?</h1>
					<p className='p-5 text-center'>
					Nutrisi adalah sejumlah kandungan gizi atau zat yang umumnya diperoleh dari berbagai jenis bahan pangan dan makanan, seperti karbohidrat, protein, lemak, mineral, vitamin, serat, serta air. Seluruh nutrisi tersebut memiliki peran penting dalam menjaga, membangun, serta memelihara sel dan jaringan tubuh manusia. Bisa dibilang, mencukupi kebutuhan nutrisi secara seimbang merupakan langkah utama untuk meningkatkan kesehatan dan mencegah penyakit. Lalu, apa dampaknya jika asupan gizi tidak terpenuhi atau justru berlebih?
					</p>
					<p className='px-5 pb-5 text-center'>
					Well, kekurangan ataupun kelebihan nutrisi adalah hal yang patut Anda waspadai. Pasalnya, hal tersebut akan membuat Anda lebih berisiko mengalami sejumlah gangguan kesehatan. Kondisi ini juga dikenal dengan istilah malnutrisi.Maka dari itu, penting bagi Anda memastikan asupan nutrisi tercukupi secara seimbang dengan mengonsumsi makanan sehat dan bergizi. Adapun sumber nutrisi terbaik yang diperlukan oleh tubuh banyak terdapat pada sayuran, buah, kacang-kacangan, hingga biji-bijan.
					</p>
				</div>
				<div className='bg-gray-300 rounded-[25px] my-5'>
					<h1 className='text-4xl font-bold text-center bg-slate-400 p-5 rounded-t-[25px]'>Kenapa <i>nutrisi</i> sangat penting untuk <i>Ibu Hamil</i>?</h1>
					<p className='p-5 text-center'>
					Ibu hamil harus mengkonsumsi makanan lebih banyak karena harus memenuhi kebutuhan zat gizi untuk dirinya dan untuk pertumbuhan serta perkembangan janin/bayinya
					</p>
				</div>
			</div>
			<div>
				<p className='text-center text-7xl mx-5 italic font-serif'>Contoh Nutrisi Ibu Hamil</p>
				<NutCard trimester='trimester ' data='makanan/' classname='auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%] lg:auto-cols-[25%] rounded-t-none'>Makanan</NutCard>
			</div>
			<div className='flex bg-slate-200 h-[50%] mb-3'>
				<img className='max-w-[40%] p-5 hidden lg:block object-cover lazyload' src='https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg' data-src="https://raw.githubusercontent.com/nabati17/DATAC/main/mother/VectorIbuHamil.png" alt="PregnantWoman" />
				<NutCard width="w-[100%] lg:w-[60%] m-auto" data='minuman/' classname='auto-cols-[100%] md:auto-cols-[50%]'>Minuman</NutCard>
			</div>
			<div className='flex'>
				<NutSuppCard width="w-[100%] lg:w-[60%] m-auto" data='suplement/' classname='auto-cols-[100%] md:auto-cols-[50%]'>Suplement</NutSuppCard>
				<img className='max-w-[40%] mx-auto p-5 hidden lg:block object-cover lazyload' src='https://raw.githubusercontent.com/nabati17/DATAC/main/img/lazyload.jpeg' data-src="https://raw.githubusercontent.com/nabati17/DATAC/main/mother/MothersDay.png" alt="PregnantWoman" />
			</div>
		</>
  )
}

export default Nutrisi