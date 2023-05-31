import { useState, useEffect } from 'react'
import { database } from '../config/config'
import { onValue, ref } from 'firebase/database'

const useIpcheck = () => {
	const [isOk, setIsOk] = useState<boolean>(true)
	const [data, setData] = useState<string>('')
	const dbref = ref(database, 'ip')
	const fetchIp = () => {
		onValue(dbref, async(e) => {
			const getIp = await fetch('https://ipapi.co/json/')
				.then(res => res.json())
				.then(data => data.ip)
			const data = e.val() as {admin: string}[]
			setIsOk(!!data.filter(i => i.admin === getIp).length)
		})
	}

	useEffect(() => {
		fetchIp()
	}, [])

	return isOk
}

export default useIpcheck