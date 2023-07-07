import React, { useContext } from 'react'
import orderContext from '../../context/orderContext/OrderContext'

const ModalFinishOrder = ({order, setOpenModalFinishOrder, setopenModal}) => {
    const {orderFinished} = useContext(orderContext)

    const handleFinishOrder = () => {
        orderFinished(order._id, {...order, finished: true})
        setOpenModalFinishOrder(false)
        setopenModal(false)
    }

  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col bg-white border-2 border-secondary rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-1/5 ">
            <p className='text-center text-primary font-bold mt-6'>¿Estás seguro has terminado el pedido de {order.customer}?</p>
            <div className='flex items-center justify-center gap-6 w-full mr-4 my-6'>
                    <button className='bg-red-500 py-2 px-5 rounded text-white' onClick={() => setOpenModalFinishOrder(false)}>No</button>
                    <button className='bg-green-600 py-2 px-5 rounded text-white' onClick={handleFinishOrder}>Si</button>
                </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalFinishOrder