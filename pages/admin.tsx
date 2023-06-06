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
import Form from "../components/Form"

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
      <Form />
    </>
  )
}

export default admin