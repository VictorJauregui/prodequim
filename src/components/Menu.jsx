import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='bg-white flex items-center'>
      <img className='w-48' src={logo} alt="" />
      <div className='w-full'>
        <div className='flex justify-end gap-10 text-2xl mr-10 text-primary'>
          <NavLink to="/">
            <p className='cursor-pointer'>Pedidos</p>
          </NavLink>
          <NavLink to="/customer">
            <p className='cursor-pointer'>Clientes</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Menu