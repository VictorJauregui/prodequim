import React, { useContext } from 'react'
import Menu from '../components/Menu'
import orderContext from '../context/orderContext/OrderContext'

const FabricationPage = () => {
    const {dataOrders, dataProducts} = useContext(orderContext)

console.log(dataProducts)
    

  return (
    <div className='bg-primary h-screen'>
      <Menu />
      {
        dataProducts.map((order) => {
            return (
                <p>{order.image}</p>
            )
        })
      }
    </div>
  )
}

export default FabricationPage