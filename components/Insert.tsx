import React, { useState } from 'react'
import { database } from '../config/config'
import { ref, set } from 'firebase/database'
import useFetchMak from './Fetch'

const Insert = () => {
  const [name, setName] = useState<any>()
  const userId = useFetchMak().length

  const push = () => {
    set(ref(database, 'makanan/' + userId), {
      nama: name,
      image: "",
      gizi: {
        kalori: 0,
        karbohidrat: 0,
        lemak: 0,
        protein: 0,
        serat: 0,
        vitamin: ""
      },
      manfaat: ""
    }).catch(alert)
  }
  return (
    <>
      <h1 className='cek p-3'>Insert Data</h1>
      <form action="" className="flex flex-col p-[16px] gap-[10px]">
        <label htmlFor="nama" className="">Nama Makanan</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} pattern='[A-Za-z]' title='Only Letter' className="w-full sm:w-[20vw] border-2 border-black" />
        <button type="submit" className="p-[8px] self-end border-black border rounded-[50px] w-fit hover:bg-gray-950 hover:text-white" onClick={push}>Submit</button>
      </form>
    </>
  )
}

export default Insert