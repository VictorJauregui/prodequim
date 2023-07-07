import React, { useContext, useState } from "react";
import Menu from "../components/Menu";
import plus from '../assets/plus.png'
import CardCustomer from "../components/CardCustomer";
import ModalNewCustomer from "../components/Modals/ModalNewCustomer";
import orderContext from "../context/orderContext/OrderContext";
import ModalInfoCustomer from "../components/Modals/ModalInfoCustomer";

const CustomerPage = () => {
  const {dataCustomers} = useContext(orderContext)
  const [openModal, setOpenModal] = useState(false)
  const [openInfoModal, setOpenInfoModal] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)

console.log(dataCustomers)

  return (
    <div className='bg-primary h-screen'>
      <Menu />
      <div className='flex mt-10 text-xl mx-20'>
        <p className='text-white w-[10%] cursor-pointer'>Clientes</p>
        <div className='w-full flex justify-end '>
          <div  className='flex justify-center w-48 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2' onClick={()=>setOpenModal(true)}>
            <img className='w-5' src={plus} alt="" />
            <p>Nuevo cliente</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-7 px-20 m gap-6 mt-10 w-full'>
        {
          dataCustomers.map((customer)=>{
            return (
              <CardCustomer customer={customer} setOpenInfoModal={setOpenInfoModal} setCurrentCustomer={setCurrentCustomer} />
            )

          })
        }
        {
          openModal &&
          <ModalNewCustomer setOpenModal={setOpenModal} />
        }
        {
          openInfoModal &&
          <ModalInfoCustomer setOpenInfoModal={setOpenInfoModal} setCurrentCustomer={setCurrentCustomer} currentCustomer={currentCustomer} />
        }
      </div>
    </div>
  );
};

export default CustomerPage;
