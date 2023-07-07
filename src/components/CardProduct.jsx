import React from 'react'
import detergente from '../assets/detergente.png'

const CardProduct = ({product}) => {
  return (
      <div className='bg-white rounded'>
        <img className='w-full max-h-52 min-h-52 px-8 py-6 border-b border-primary' src={product.image} alt='' />
        <p className='text-sm text-primary ml-3 mt-3 font-bold mb-4'>
          Producto: <span className='font-normal'>{product.product}</span>
        </p>
      </div>
      
  )
}

export default CardProduct