import React from 'react'

const Cards = ({item}) => {
    console.log(item)
  return (
    <>
    <div className='mt-4'>
     <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 duration-200 cursor-pointer">
  <figure>
    <img className='w-full'
      src={item.image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-purple-400 hover:text-white duration-500 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards