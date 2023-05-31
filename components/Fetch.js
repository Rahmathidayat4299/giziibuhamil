import { getDatabase, onValue, ref } from 'firebase/database'
import { firebaseApp } from '../config/config'

const Fetch = () => {
	const fetched = async () => {
		const db = getDatabase(firebaseApp)
		const dbref = ref(db, 'makanan')

		onValue(dbref, (e) => {
			const records = []
			e.forEach(ev => {
				const keyname = ev.key
				const data = ev.val()
				records.push({ key: keyname, data })
			})
		})
	}
	fetched()

	return (
		<div>
			{}
		</div>
	)
}

export default Fetch
