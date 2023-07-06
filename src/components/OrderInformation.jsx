import React, { useContext, useEffect, useState } from 'react'
import finish from '../assets/finish.png'
import finishDone from '../assets/finishDone.png'
import orderContext from '../context/orderContext/OrderContext'

const OrderInformation = ({orde, order}) => {
    const {updateOrder} = useContext(orderContext)

    const [finished, setfinished] = useState(orde.estado === "finished")

    

    
    const HandleFinished = () => {
        updateOrder(order._id, {...orde, estado: "finished"})
        setfinished(true)
    }

    const HandleNotFinished = () => {
        updateOrder(order._id, {...orde, estado: "notFinished"})
        setfinished(false)
    }

    


  return (
        <div className='flex border-b border-gray-300 py-2'>
                                <p className=' w-3/5'>{orde.producto}</p>
                                <p className='w-1/5'>{orde.cantidad}</p>
                                {
                                    !finished ?
                                    <img className='max-h-5 cursor-pointer' onClick={HandleFinished} src={finish} alt="finished"/>
                                    : 
                                    <div className='flex items-center gap-3' onClick={HandleNotFinished}  >
                                        <img className='max-h-5 cursor-pointer' src={finishDone} alt="finished"  />
                                        <p>Terminado</p>
                                    </div>
                                }
        </div>
   
  )
}

export default OrderInformation