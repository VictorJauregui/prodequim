import React, { useState, useEffect } from 'react';
import noStarted from '../assets/noStarted.png';
import inProduction from '../assets/inProduction.png'
import finished from '../assets/finished.png'


const CardOrder = ({ setopenModal, order, openModal, setCurrentOrder, ordersInProcess, }) => {
  const [fechaPedido, setFechaPedido] = useState('');
  

  useEffect(() => {
    const fechaActual = new Date().toLocaleDateString();
    setFechaPedido(fechaActual);
  }, []);

  const openOrderModal = () => {
    setopenModal(true);
    setCurrentOrder(order)
  };

  return (
    
    <div>
      
      
      <div className='bg-gray-300 hover:bg-white rounded hover:border-2 hover:border-secondary cursor-pointer' onClick={openOrderModal}>
        <img className='w-24 mt-6' src={ordersInProcess ? inProduction : finished} alt='' />
        <img className='w-full max-h-32 px-8 py-6 border-b border-primary' src={order.customerId.image} alt='' />
        <p className='text-sm text-primary ml-3 mt-3 font-bold'>
          Cliente: <span className='font-normal'>{order.customer}</span>
        </p>
        <p className='text-sm text-primary ml-3 font-bold mb-6'>
          Fecha de pedido: <span className='font-normal'>{fechaPedido}</span>
        </p>
      </div>
      
    </div>
    
  );
};

export default CardOrder;