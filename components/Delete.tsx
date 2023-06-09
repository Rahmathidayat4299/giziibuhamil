import { ref, remove } from 'firebase/database'
import React, { useEffect } from 'react'
import { database } from '../config/config'
import useFetch from './Fetch'

type Props = {
  itemId: string
  typeFetch: 'makanan/' | 'minuman/' | 'suplement/'
}

const Delete = (props: Props) => {
  const dbref = ref(database, props.typeFetch + props.itemId)
  const del = () => {
    remove(dbref).catch(alert)
  }
  return (
    <>
      <button onClick={() => del()}>Delete</button>
    </>
  )
}

export default Delete