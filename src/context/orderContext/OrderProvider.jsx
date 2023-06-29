import React, { useState } from 'react'
import orderContext from './OrderContext'

const OrderProvider = ({children}) => {
    const [order, setOrder] = useState()

const newOrderByServidor = async (newOrder) => {
    const res = await fetch("http://localhost:4008/order/add-new-order", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newOrder)
    });

    const data = await res.json()
    console.log(data)

}

const addCustomer = async (formData) => {
    const res = await fetch("http://localhost:4008/customer/add-new-customer", {
        method: "POST",
        body: formData
    })
    const data = await res.json()
    console.log(data)
}

  return (
    <orderContext.Provider 
    value={{
        order,
        setOrder,
        newOrderByServidor,
        addCustomer
    }}>
        {children}
    </orderContext.Provider>
  )
}

export default OrderProvider