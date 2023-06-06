import { ref, remove } from 'firebase/database'
import React, { useEffect } from 'react'
import { database } from '../config/config'
import useFetch from './Fetch'

type Props = {
  itemId: string
  typeFetch: 'makanan/' | 'minuman/' 
}

const Delete = (props: Props) => {
  console.log(props.itemId)
  const dbref = ref(database, 'makanan/' + props.itemId)
  const del = () => {
    remove(dbref).catch(alert)
    console.log('cek')
  }
  return (
    <>
      <button onClick={() => del()}>Delete</button>
    </>
  )
}

export default Delete