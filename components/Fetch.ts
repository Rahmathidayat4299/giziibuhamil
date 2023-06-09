import { onValue, ref} from 'firebase/database'
import { database } from '../config/config.js'
import { useEffect, useState } from 'react'

type state = {
	id: string;
	nama: string
	manfaat: string
	image: string
	gizi: {
		kalori: number
		karbohidrat: number
		lemak: number
		protein: number
		serat: number
		vitamin: string[]
	}
}

const useFetch = (data: string) => {
	const dbref = ref(database, data)
	const [Data, setData] = useState<state[]>([])

	const fetching = () => {
		onValue(dbref, (e) => {
			// const data = e.()
			// // setData(data)
			const arrayFetch = Object.keys(e.val()).map((key, i) => {
				return ({
					id: key,
					...e.val()[key]
				})
			}) as state[]
			setData(arrayFetch)
		})
	}

	useEffect(() => {
		fetching()
	}, [])
	return Data
}


export default useFetch
