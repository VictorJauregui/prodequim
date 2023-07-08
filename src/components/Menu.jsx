import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation();
  return (
    <div className='bg-white flex-col md:flex md:flex-row items-center justify-center'>
      <img className='w-48 mx-auto' src={logo} alt="" />
      <div className='w-full '>
        <div className='flex justify-center md:justify-end gap-6 sm:gap-8 md:gap-10 md:text-xl lg:text-2xl md:mr-10 text-primary pb-4 md:pb-0'>
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