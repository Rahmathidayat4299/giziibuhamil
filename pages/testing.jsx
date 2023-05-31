import useFetch from '../components/Fetch.ts'
import Navbar from '../components/Navbar.js'

const testing = () => {
	const data = useFetch()
	return (
		<div>
			<Navbar />
			{
				data.map((item, id) => (
					<p key={id}>{item.nama}</p>
				))
			}
		</div>
	)
}

export default testing
