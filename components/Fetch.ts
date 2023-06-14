import { get, onValue, orderByChild, orderByValue, query, ref} from 'firebase/database'
import { database } from '../config/config.js'
import { useEffect, useState } from 'react'

type state = {
	id: string;
	nama: string
	manfaat: string
	image: string
	gizi: {
		kalori: string
		karbohidrat: string
		lemak: string
		protein: string
		serat: string
		vitamin: string[]
	},
	trimester: string
}

const useFetch = (data: string) => {
	const dbref = ref(database, data)
	const q = query(ref(database, 'makanan/'), orderByValue())
	const [Data, setData] = useState<state[]>([])

	const fetching = () => {
		onValue(dbref, (e) => {
			const arrayFetch = Object.keys(e.val()).map((key) => {
				return ({
					id: key,
					...e.val()[key]
				})
			}) as state[]
			setData(arrayFetch)
		})
	}

	const orderBy = () => {
		onValue(q, e => {
			get(q)
			.then((data) => {
				// console.log(data)
				const datad = data.val()
			})
			.catch((err) => { console.log(err) })
		})
	} 

	useEffect(() => {
		fetching()
		orderBy()
	}, [])
	return Data
}


export default useFetch
