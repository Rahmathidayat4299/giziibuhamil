import { onValue, ref} from 'firebase/database'
import { database } from '../config/config.js'
import { useEffect, useState } from 'react'

type state = {
	id: string
	nama: string
	manfaat: string
	image: string
	gizi?: {
		kalori?: any,
		karbohidrat?: any,
		lemak?: any,
		protein?: any,
		serat?: any,
		vitamin?: any
	},
	trimester: string
}

export const useFetch = (data: 'makanan/' | 'minuman/' | 'suplement/') => {
	const dbref = ref(database, data)
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

	useEffect(() => {
		fetching()
	}, [])
	return Data
}

export const useFetchId = (data: string) => {
	const dbref = ref(database, data)
	const [Data, setData] = useState([])
	
	const fetching = () => {
		onValue(dbref, (e) => {
			const arrayFetch = e.val()
			setData(arrayFetch)
		})
	}

	useEffect(() => {
		fetching()
	}, [])
	return Data
}
