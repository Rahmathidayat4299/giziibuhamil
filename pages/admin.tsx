import { useRouter } from "next/router"
import Insert from "../components/Insert"
import Navbar from "../components/Navbar.js"
import useIpcheck from "../components/Ipcheck"
import { useEffect } from 'react'

type Props = {}

const admin = (props: Props) => {
  const pass = useIpcheck()
  const route = useRouter()

  useEffect(() => {
    console.log(pass)
    if (!pass){
      // route.push('404')
    }
  }, [pass])
  
  return (
    <>
      <Navbar />
      <Insert />
    </>
  )
}

export default admin