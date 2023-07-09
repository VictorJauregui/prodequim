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



  return (
    <div className='bg-primary  pb-20 min-h-screen'>
      <Menu />
      <div className='flex mt-10 text-xl mx-12 md:mx-20'>
        <p className='text-white w-[10%] cursor-pointer'>Clientes</p>
        <div className='w-full flex justify-end '>
          <div  className='flex justify-center px-2 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2' onClick={()=>setOpenModal(true)}>
            <img className='w-5' src={plus} alt="" />
            <p className="flex ">
              Nuevo&nbsp;<span className="hidden md:flex ">cliente</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-12 md:px-20  gap-6 mt-10 w-full'>
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
