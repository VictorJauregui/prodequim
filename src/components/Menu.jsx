import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation();
  return (
    <div className='bg-white flex items-center'>
      <img className='w-48' src={logo} alt="" />
      <div className='w-full'>
        <div className='flex justify-end gap-10 text-2xl mr-10 text-primary'>
          <NavLink to="/" className={location.pathname === "/" ? "font-bold border-b-2 border-primary" : ""}>Pedidos</NavLink>
          <NavLink to="/fabrication" className={location.pathname === "/fabrication" ? "font-bold border-b-2 border-primary" : ""}>Fabricación</NavLink>
          <NavLink to="/customer" className={location.pathname === "/customer" ? "font-bold border-b-2 border-primary" : ""}>Clientes</NavLink>
          <NavLink to="/products" className={location.pathname === "/products" ? "font-bold border-b-2 border-primary" : ""}>Productos</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Menu