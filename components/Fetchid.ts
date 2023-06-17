import { onValue, ref} from 'firebase/database'
import { database } from '../config/config.js'
import { useEffect, useState } from 'react'

type state = {
	id: string
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

export const useFetchId = (data: string) => {
	const dbref = ref(database, data)
	const [Data, setData] = useState<state[]>([])
	
	const fetching = () => {
		onValue(dbref, (e) => {
			e.val()
		})
	}

	useEffect(() => {
		fetching()
	}, [])
	return Data
}
