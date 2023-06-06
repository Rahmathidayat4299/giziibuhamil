import React from 'react'

const Form = () => {
  return (
    <>
    <h1 className='cek p-3'>Insert Data</h1>
    <form className="flex flex-col p-[16px] gap-[10px]">
      <label htmlFor="nama" className="">Nama Makanan</label>
      <input type="text" pattern='[A-Za-z ]{1,20}' title='Only Letter' className="w-full sm:w-[20vw] border-2 border-black" />
      <button type="submit" className="p-[8px] self-end border-black border rounded-[50px] w-fit hover:bg-gray-950 hover:text-white">Submit</button>
    </form>
    </>
  )
}

export default Form