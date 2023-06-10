import useFetchMak from '../components/Fetch.ts'
import Navbar from '../components/Navbar.js'

const testing = () => {
	const makanan = useFetchMak()
	return (
		<div>
			<Navbar />
			{
				makanan.map((item, id) => (
					<p key={id}>{item.nama}</p>
				))
			}
		</div>
	)
}

export default testing
