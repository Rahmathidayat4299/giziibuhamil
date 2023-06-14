import { ref, set } from 'firebase/database'
import React, { SyntheticEvent, useState } from 'react'
import { database } from '../config/config'
import { nanoid } from 'nanoid'


const Form = (data: string) => {
  const spliced = data.replace('/','')
  const [name, setName] = useState<any>()
  const push = (e: SyntheticEvent) => {
    const insertedAt = new Date().toJSON()
    console.log(insertedAt)
    e.preventDefault()
    const id = nanoid(16)
    const combined = id + insertedAt
    console.log(combined)
    set(ref(database, data + combined), {
      nama: name,
      image: "",
      gizi: {
        kalori: "",
        karbohidrat: "",
        lemak: "",
        protein: "",
        serat: "",
        vitamin: ""
      },
      manfaat: "",
      trimester: "",
    }).then(() => {
      setName('')
    }).catch(alert)
  }
  return (
    <>
    <h1 className='cek p-3'>Insert Data</h1>
    <form onSubmit={push} className="flex flex-col p-[16px] gap-[10px]">
      <label htmlFor="nama" className="">Nama {spliced}</label>
      <input type="text" pattern='[A-Za-z ]{1,20}' title='Only Letter' value={name} onChange={e => setName(e.target.value)} className="w-full sm:w-[20vw] border-2 border-black" />
      <button type="submit" className="p-[8px] self-end border-black border rounded-[50px] w-fit hover:bg-gray-950 hover:text-white">Submit</button>
    </form>
    </>
  )
}

export default Form