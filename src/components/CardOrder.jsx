import React, { useState } from 'react'
import eljamon from '../assets/eljamon.png'
import noStarted from '../assets/noStarted.png'
import servicenca from '../assets/servicenca.png'
import cabeco from '../assets/cabeco.png'

const CardOrder = ({setopenModal}) => {

    const openOrderModal = () => {
        setopenModal(true)
    }

  return (
    <div className='grid grid-cols-7 px-20 m gap-6 mt-10 w-full '>
        <div className='bg-gray-300 hover:bg-white rounded hover:border-2 hover:border-secondary cursor-pointer ' onClick={openOrderModal}>
            <img className='w-24 mt-6' src={noStarted} alt="" />
            <img className='w-full max-h-32 px-8 py-6 border-b border-primary' src={eljamon} alt="" />
            <p className='text-sm text-primary ml-3 mt-3 font-bold'>Cliente: <span className='font-normal'>El Jamón</span></p>
            <p className='text-sm text-primary ml-3 font-bold mb-6'>Fecha de pedido: <span className='font-normal'>23-10-2023</span></p>
        </div>   
        <div className='bg-gray-300 hover:bg-white rounded hover:border-2 hover:border-secondary cursor-pointer '>
            <img className='w-24 mt-6' src={noStarted} alt="" />
            <img className='w-full max-h-32 px-8 py-6 border-b border-primary' src={servicenca} alt="" />
            <p className='text-sm text-primary ml-3 mt-3 font-bold'>Cliente: <span className='font-normal'>Servicenca</span></p>
            <p className='text-sm text-primary ml-3 font-bold mb-6'>Fecha de pedido: <span className='font-normal'>23-10-2023</span></p>
        </div>   
        <div className='bg-gray-300 hover:bg-white rounded hover:border-2 hover:border-secondary cursor-pointer '>
            <img className='w-24 mt-6' src={noStarted} alt="" />
            <img className='w-full max-h-32 px-8 py-6 border-b border-primary' src={cabeco} alt="" />
            <p className='text-sm text-primary ml-3 mt-3 font-bold'>Cliente: <span className='font-normal'>Cabeco</span></p>
            <p className='text-sm text-primary ml-3 font-bold mb-6'>Fecha de pedido: <span className='font-normal'>23-10-2023</span></p>
        </div>   
 
        
    </div>
  )
}

export default CardOrder