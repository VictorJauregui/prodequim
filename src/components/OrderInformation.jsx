import React, { useContext, useState } from 'react'
import finish from '../assets/finish.png'
import finishDone from '../assets/finishDone.png'
import orderContext from '../context/orderContext/OrderContext'

const OrderInformation = ({orde, order}) => {
    const {updateOrder, dataProducts} = useContext(orderContext)

    const [finished, setfinished] = useState(orde.estado === "finished")

    

    
    const HandleFinished = () => {
        updateOrder(order._id, {...orde, estado: "finished"})
        setfinished(true)
    }

    const HandleNotFinished = () => {
        updateOrder(order._id, {...orde, estado: "notFinished"})
        setfinished(false)
    }

    console.log(orde)
    console.log(dataProducts)

    
  return (
        <div className=''>
                                { dataProducts.filter((product)=> {
                                    return (
                                        orde.producto === product.product
                                    )
                                }).map((product) => {
                                    return (
                                    <div className='flex border-b border-gray-300 py-2  w-full items-center'>
                                        <img className='w-12' src={product.image} alt="" />
                                        <p className=' w-3/5'>{product.product}</p>
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
                                })


                                }
        </div>
   
  )
}

export default OrderInformation