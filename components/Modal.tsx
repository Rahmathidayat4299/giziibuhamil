import React, { useState } from 'react'

type state = {
	id: string
	nama: string
	manfaat: string
	image: string
	gizi: {
		kalori: string
		karbohidrat: string
		lemak: string
		protein: string
		serat: string
		vitamin: string[]
	},
	trimester: string
}

const Modal = (data: any[]) => {
  return (
    console.log(data[1])
  )
}

export default Modal