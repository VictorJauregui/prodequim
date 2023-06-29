import React, { useState } from 'react'
import Menu from '../components/Menu'
import plus from '../assets/plus.png'
import CardOrder from '../components/CardOrder'
import ModalOrder from '../components/ModalOrder'
import ModalNewOrder from '../components/ModalNewOrder'

const HomePage = () => {
  const [openModal, setopenModal] = useState(false)
  const [openModalOrder, setopenModalOrder] = useState(false)




  return (
    <div className='bg-primary h-screen'>
      <Menu />
      <div className='flex mt-10 text-xl mx-20'>
        <p className='text-white w-[10%] cursor-pointer'>En proceso</p>
        <p className='text-white w-[10%] cursor-pointer'>Finalizados</p>
        <div className='w-full flex justify-end '>
          <div onClick={()=>setopenModalOrder(true)}  className='flex justify-center w-48 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2'>
            <img className='w-5' src={plus} alt="" />
            <p>Nuevo pedido</p>
          </div>
        </div>
      </div>
      <div className=''>
        <CardOrder setopenModal={setopenModal}/>
        {
          openModal &&
          <ModalOrder setopenModal={setopenModal} />
        }
        {
          openModalOrder &&
          <ModalNewOrder setopenModalOrder={setopenModalOrder} />

        }
      </div>
    </div>
  )
}

export default HomePage