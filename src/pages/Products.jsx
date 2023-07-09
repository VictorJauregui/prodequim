import React, { useContext, useState } from 'react'
import Menu from '../components/Menu'
import CardProduct from '../components/CardProduct'
import plus from '../assets/plus.png'
import ModalNewProduct from '../components/Modals/ModalNewProduct'
import orderContext from '../context/orderContext/OrderContext'

const Products = () => {
    const {dataProducts} = useContext(orderContext)
    const [openModalNewProduct, setOpenModalNewProduct] = useState(false)

    
  return (
    <div className='bg-primary min-h-screen pb-20'>
      <Menu />
      <div className='flex mt-10 text-xl mx-10 md:mx-20'>
        <p className='text-white w-[10%] cursor-pointer'>Productos</p>
        <div className='w-full flex justify-end '>
          <div className='flex justify-center px-2 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2' onClick={()=>setOpenModalNewProduct(true)}>
            <img className='w-5' src={plus} alt="" />
            <p className='flex '>Nuevo&nbsp;<span className='hidden md:flex '>producto</span> </p>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-12 md:px-20  gap-6 mt-10 w-full  '>
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