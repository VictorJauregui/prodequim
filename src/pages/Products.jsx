import React, { useContext, useState } from 'react'
import Menu from '../components/Menu'
import CardProduct from '../components/CardProduct'
import plus from '../assets/plus.png'
import ModalNewProduct from '../components/Modals/ModalNewProduct'
import orderContext from '../context/orderContext/OrderContext'

const Products = () => {
    const {dataProducts} = useContext(orderContext)
    const [openModalNewProduct, setOpenModalNewProduct] = useState(false)

    console.log(dataProducts)
  return (
    <div className='bg-primary h-screen'>
      <Menu />
      <div className='flex mt-10 text-xl mx-20'>
        <p className='text-white w-[10%] cursor-pointer'>Productos</p>
        <div className='w-full flex justify-end '>
          <div className='flex justify-center w-48 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2' onClick={()=>setOpenModalNewProduct(true)}>
            <img className='w-5' src={plus} alt="" />
            <p>Nuevo producto</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-7 px-20 m gap-6 mt-10 w-full '>
        {
            dataProducts.map((product)=> {
                return (
                    <CardProduct product={product}  />
                )
            })
        }
      </div>
      {
        openModalNewProduct &&
        <ModalNewProduct setOpenModalNewProduct={setOpenModalNewProduct} openModalNewProduct={openModalNewProduct} />
      }
    </div>
  )
}

export default Products