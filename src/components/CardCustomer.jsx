import React from 'react'
import eljamon from '../assets/eljamon.png'

const CardCustomer = () => {
  return (
    <div className='grid grid-cols-7 px-20 m gap-6 mt-10 w-full '>
    <div className='bg-gray-300 hover:bg-white rounded hover:border-2 hover:border-secondary cursor-pointer '>
        <p className='text-primary m-4'>El jamón SL</p>
        <img className='w-full max-h-32 px-8 py-6 border-b border-primary' src={eljamon} alt="" />

    </div> 
</div>
  )
}

export default CardCustomer