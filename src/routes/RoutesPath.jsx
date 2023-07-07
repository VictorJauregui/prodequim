import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CustomerPage from '../pages/CustomerPage'
import OrderProvider from '../context/orderContext/OrderProvider'
import FabricationPage from '../pages/FabricationPage'
import Products from '../pages/Products'


const RoutesPath = () => {
  return (

    <div>
      <OrderProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/customer" element={<CustomerPage/>} />
                  <Route path="/fabrication" element={<FabricationPage/>} />
                  <Route path="/products" element={<Products />} />
              </Routes>
          </BrowserRouter>
        </OrderProvider>
    </div>
  )
}

export default RoutesPath