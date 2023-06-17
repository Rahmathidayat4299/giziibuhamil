const Modal = (data: any[]) => {
  const item = data[1]

  return (
    <>
      <div tabIndex={1000} className="fixed top-0 left-0 w-screen h-screen hidden">
        <div className="h-fit w-[80vw] bg-slate-400">
          <p className="text-center">center</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa recusandae cupiditate animi perspiciatis, placeat minus non distinctio sint, hic quibusdam commodi, nisi accusantium. Perferendis labore laudantium ea cupiditate dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corrupti tenetur cum. Est minus dolore, dolores, distinctio qui quisquam similique veritatis ratione ipsa aliquid nostrum minima. Fugit deleniti sapiente aspernatur!</p>
        </div>
      </div>
    </>
  )
}

export default Modal