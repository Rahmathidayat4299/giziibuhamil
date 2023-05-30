import { useEffect, useState } from 'react'
import supabase from '../config/sbClient'

const testing = () => {
  const [fetchError, setFetchError] = useState(null)
  const [makanan, setMakanan] = useState(null)

  const fetchMakanan = async () => {
    const {data, error} = await supabase
    .from('makanan').select()

    if (error) {
      setFetchError('Could not fetch makanan')
      setMakanan(null)
      console.error(error)
    }

    if (data){
      console.log(data)
      setMakanan(data)
      setFetchError(null)
    }
  }
  useEffect(() => {
    fetchMakanan()
  }, [])

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {makanan && (
        <div className='makanan'>
          {makanan.map(food => (
            <p>{food.nama}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default testing