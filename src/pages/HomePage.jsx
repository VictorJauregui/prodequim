import React, { useContext, useState } from 'react'
import Menu from '../components/Menu'
import plus from '../assets/plus.png'
import CardOrder from '../components/CardOrder'
import ModalOrder from '../components/ModalOrder'
import ModalNewOrder from '../components/ModalNewOrder'
import orderContext from '../context/orderContext/OrderContext'

const HomePage = () => {
  const [openModal, setopenModal] = useState(false)
  const [openModalOrder, setopenModalOrder] = useState(false)
  const {dataOrders} = useContext(orderContext)
  const [currentOrder, setCurrentOrder] = useState(null)
  const [inProcess, setInprocess] = useState(true)

  const ordersInProcess = dataOrders.filter((order) => {
    return order.finished === false
  })

  const orderFinished = dataOrders.filter((order) => {
    return order.finished === true
  })




  return (
    <div className='bg-primary h-screen'>
      <Menu />
      <div className='flex mt-10 text-xl mx-20'>
        <p className={!inProcess ? 'text-white w-[10%] cursor-pointer' : 'w-[10%] text-2xl font-bold  text-secondary   cursor-pointer'} onClick={()=>setInprocess(true)}>En proceso</p>
        <p className={inProcess ? 'text-white w-[10%] cursor-pointer' : 'w-[10%] text-2xl font-bold  text-secondary   cursor-pointer'} onClick={()=>setInprocess(false)}>Finalizados</p>
        <div className='w-full flex justify-end '>
          <div onClick={()=>setopenModalOrder(true)}  className='flex justify-center w-48 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2'>
            <img className='w-5' src={plus} alt="" />
            <p>Nuevo pedido</p>
          </div>
        </div>
      </div>
      {
        inProcess ?
        <div  className='grid grid-cols-7 px-20 m gap-6 mt-10 w-full '>
          {
            ordersInProcess.map((order)=>{
              return (
                <CardOrder setopenModal={setopenModal} order={order} openModal={openModal} setCurrentOrder={setCurrentOrder} ordersInProcess={ordersInProcess} />

              )
            })
          }
          {
            openModalOrder &&
            <ModalNewOrder setopenModalOrder={setopenModalOrder} />

          }
          {
          openModal &&
          <ModalOrder setopenModal={setopenModal} order={currentOrder} />
          }
        </div>
        
        :

        <div  className='grid grid-cols-7 px-20 m gap-6 mt-10 w-full '>
        {
          orderFinished.map((order)=>{
            return (
              <CardOrder setopenModal={setopenModal} order={order} openModal={openModal} setCurrentOrder={setCurrentOrder} />

            )
          })
        }
        {
          openModalOrder &&
          <ModalNewOrder setopenModalOrder={setopenModalOrder} />

        }
        {
        openModal &&
        <ModalOrder setopenModal={setopenModal} order={currentOrder} />
        }
      </div>
      }
      
      
    </div>
  )
}

export default HomePage