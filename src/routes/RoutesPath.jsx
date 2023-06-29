import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CustomerPage from '../pages/CustomerPage'
import OrderProvider from '../context/orderContext/OrderProvider'


const RoutesPath = () => {
  return (

    <div>
      <OrderProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/customer" element={<CustomerPage/>} />
              </Routes>
          </BrowserRouter>
        </OrderProvider>
    </div>
  )
}

export default RoutesPath