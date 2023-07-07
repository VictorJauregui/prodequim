import React, { useEffect, useState } from 'react'
import orderContext from './OrderContext'
import { toast } from 'react-hot-toast'

const OrderProvider = ({children}) => {
    const [order, setOrder] = useState()
    const [dataCustomers, setDataCustomers] = useState([])
    const [dataOrders, setDataOrders] = useState([])
    const [dataProducts, setDataProducts] = useState([])


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
    if(data.ok){
        toast.success("Cliente subido con éxito")
    }
}

const addProduct = async (formData) => {
    const res = await fetch("http://localhost:4008/product/add-new-product", {
        method: "POST",
        body: formData
    })
    const data = await res.json()
    console.log(data)
    if(data.ok){
        toast.success("Producto subido con éxito")
    } else{
      toast.error("Ha ocurrido un error")
    }
}

const getAllCustomer = async () => {
    const res = await fetch("http://localhost:4008/customer/customers")
    const data = await res.json()
    setDataCustomers(data.customers)
}


useEffect(() => {
  getAllCustomer();
}, []);


const getAllProducts = async () => {
  const res = await fetch("http://localhost:4008/product/products")
  const data = await res.json()
  setDataProducts(data.products)
}


useEffect(() => {
    getAllProducts();
  }, []);
  



const getAllOrders = async() => {
    const res = await fetch("http://localhost:4008/order/orders")
    const data = await res.json()
    setDataOrders(data.orders)
}

useEffect(() => {
    getAllOrders();
  }, []);


  const updateOrder = async (orderId, newValue) => {
    console.log(orderId, newValue)
    const res = await fetch("http://localhost:4008/order/update-order", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId, newValue }),
    });
    const data = await res.json();
    console.log(data.orderChanged)

  };

  const orderFinished = async (orderId, newValue) => {
    console.log(orderId, newValue)
    const res = await fetch("http://localhost:4008/order/order-finished", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId, newValue }),
    });
    const data = await res.json();
    console.log(data.orderChanged)
    if(data.ok){
      toast.success('El pedido ha sido archivado con éxito. Puedes verlo en "pedidos finalizados"')
  }

  };



  return (
    <orderContext.Provider 
    value={{
        order,
        setOrder,
        newOrderByServidor,
        addCustomer,
        dataCustomers, 
        setDataCustomers,
        dataOrders,
        updateOrder,
        orderFinished,
        addProduct,
        dataProducts
    }}>
        {children}
    </orderContext.Provider>
  )
}

export default OrderProvider