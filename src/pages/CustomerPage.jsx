import React from "react";
import Menu from "../components/Menu";
import plus from '../assets/plus.png'
import CardCustomer from "../components/CardCustomer";
import ModalNewCustomer from "../components/ModalNewCustomer";

const CustomerPage = () => {
  return (
    <div className='bg-primary h-screen'>
      <Menu />
      <div className='flex mt-10 text-xl mx-20'>
        <p className='text-white w-[10%] cursor-pointer'>Clientes</p>
        <div className='w-full flex justify-end '>
          <div  className='flex justify-center w-48 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2'>
            <img className='w-5' src={plus} alt="" />
            <p>Nuevo cliente</p>
          </div>
        </div>
      </div>
      <div>
        <CardCustomer />
        <ModalNewCustomer />
      </div>
    </div>
  );
};

export default CustomerPage;
