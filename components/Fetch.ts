import { onValue, ref} from 'firebase/database'
import { database } from '../config/config.js'
import { useEffect, useState } from 'react'

type state = {
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

const useFetchMak = () => {
	const dbref = ref(database, 'makanan')
	const [Data, setData] = useState<state[]>([])

	const fetching = () => {
		onValue(dbref, (e) => {
			const data = e.val()
			setData(data)
		})
	}

	useEffect(() => {
		fetching()
	}, [])
	return Data
}


export default useFetchMak
