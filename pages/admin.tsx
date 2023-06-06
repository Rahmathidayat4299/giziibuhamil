import { useRouter } from "next/router"
import Navbar from "../components/Navbar.js"
import useIpcheck from "../components/Ipcheck"
import { SyntheticEvent, useEffect, useState } from 'react'
import useFetch from "../components/Fetch"
import Button from '../components/Button.js'
import Delete from "../components/Delete"
import { database } from "../config/config"
import { ref, set } from "firebase/database"
import { nanoid } from "nanoid"

type Props = {}

const admin = (props: Props) => {
  const makan = useFetch('makanan/')
  const [name, setName] = useState<any>()
  const pass = useIpcheck()
  const route = useRouter()

  useEffect(() => {
    console.log(pass)
    if (!pass){
      // route.push('404')
    }
  }, [pass])
  
  const push = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(name)
    const id = nanoid(16)
    set(ref(database, 'makanan/' + id), {
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
    }).then(() => {
      setName('')
    }).catch(alert)
  }

  return (
    <>
      <Navbar />
      <div>
			{
			  makan.length ? makan.map((item, id) => (
          <>
            <div className="flex justify-between">
              <p key={id}>{`${id} ${item.nama}`}</p>
              <Delete itemId={item.id} typeFetch='makanan/'/>
            </div>
          </>
				)) : null
			}
		  </div>
      <h1 className='cek p-3'>Insert Data</h1>
      <form onSubmit={push} className="flex flex-col p-[16px] gap-[10px]">
        <label htmlFor="nama" className="">Nama Makanan</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} pattern='[A-Za-z ]{1,20}' title='Only Letter' className="w-full sm:w-[20vw] border-2 border-black" />
        <button type="submit" className="p-[8px] self-end border-black border rounded-[50px] w-fit hover:bg-gray-950 hover:text-white">Submit</button>
      </form>
    </>
  )
}

export default admin