import { useRouter } from "next/router"
import Navbar from "../components/Navbar.js"
import useIpcheck from "../components/Ipcheck"
import { useEffect } from 'react'
import { useFetch } from "../components/Fetch"
import Delete from "../components/Delete"
import Form from "../components/Form"

type Props = {}

const admin = (props: Props) => {
  const makan = useFetch('makanan/')
  const minum = useFetch('minuman/')
  const supp = useFetch('suplement/')
  const formMakan = Form('makanan/')
  const formMinum = Form('minuman/')
  const formSupp = Form('suplement/')
  const pass = useIpcheck()
  const route = useRouter()

  useEffect(() => {
    if (!pass){
      route.push('404').catch(() => console.log(''))
    }
  }, [pass])

  return (
    <>
      <Navbar />
      <div>
			{
			  makan.length ? makan.map((item, id) => (
          <>
            <div className="flex justify-between">
              <p key={id}>{`${id + 1} ${item.nama}`}</p>
              <Delete itemId={item.id} typeFetch='makanan/'/>
            </div>
          </>
				)) : null
			}
		  </div>
      {formMakan}
      <div>
			{
			  minum.length ? minum.map((item, id) => (
          <>
            <div className="flex justify-between">
              <p key={id}>{`${id + 1} ${item.nama}`}</p>
              <Delete itemId={item.id} typeFetch='minuman/'/>
            </div>
          </>
				)) : null
			}
		  </div>
      {formMinum}
      <div>
			{
			  supp.length ? supp.map((item, id) => (
          <>
            <div className="flex justify-between">
              <p key={id}>{`${id + 1} ${item.nama}`}</p>
              <Delete itemId={item.id} typeFetch='suplement/'/>
            </div>
          </>
				)) : null
			}
		  </div>
      {formSupp}
    </>
  )
}

export default admin