import React, { useContext, useState } from 'react'
import close from '../../assets/close.png'
import logoTransparent from '../../assets/logo-transparent.png'
import OrderInformation from './../OrderInformation'
import ModalFinishOrder from './ModalFinishOrder'
import orderContext from '../../context/orderContext/OrderContext'

const ModalOrder = ({setopenModal, order, orderFinished}) => {

  const [openModalFinishOrder, setOpenModalFinishOrder] = useState(false)


  const handleFinishOrder = () => {
    setOpenModalFinishOrder(true)

    
  }


  
  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col bg-white border-2 border-secondary rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5 ">
            <div className='w-full flex justify-end'>
                <img className='w-4 m-4 cursor-pointer' src={close} onClick={()=> setopenModal(false)} alt="" />
            </div>
            <div className='flex w-full'>
                <div className='w-1/2 m-4'>
                    <p className='text-4xl font-bold text-primary'>{order.customerId.customer}</p>
                    <p className='font-bold text-gray-500 mt-2'>Fecha pedido: <span>23-10-2023</span></p>
                </div>
                <div className='w-1/2 flex justify-end items-center m-4'>
                    <img className='w-40 h-20 ' src={order.customerId.image} alt="" />
                </div>
            </div>
            <p className='text-primary text-2xl ml-4 mt-4'>Detalles del pedido</p>
            <div className='bg-gray-200 mx-4 rounded mt-2 p-4 mb-10'>
                <div className='flex w-full font-semibold text-primary mb-4 '>
                    <p className='w-3/5'>Producto</p>
                    <p className='w-2/5'>Cantidad</p>
                </div>
                <div className=' w-full  text-primary py-2  items-center'>
                    {
                        order.order.map((orde) => {
                            return (
                                <OrderInformation orde={orde} order={order}  />
                                )
                            })

                    }
                </div>
            </div>
            {
              !orderFinished ?
            <div className='flex mb-4'>
                <div>
                    <img className='max-h-28' src={logoTransparent} alt="" />
                </div>
                <div className='flex items-center justify-end gap-6 w-full mr-4'>
                    <button className='bg-red-500 py-2 px-5 rounded text-white'>Eliminar</button>
                    <button className='bg-green-600 py-2 px-5 rounded text-white' onClick={handleFinishOrder}>Finalizar</button>
                </div>
            </div> :
            <div className='flex mb-4'>
              <div>
                  <img className='max-h-28' src={logoTransparent} alt="" />
              </div>
              <div className='flex items-center justify-end gap-6 w-full mr-4'>
                  <p className='text-gray-500'>Este pedido ha sido finalizado</p>
              </div>
            </div>
            }
            {
              openModalFinishOrder &&
              <ModalFinishOrder order={order} setOpenModalFinishOrder={setOpenModalFinishOrder} setopenModal={setopenModal}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOrder