import React from 'react'
import close from '../assets/close.png'
import eljamon from '../assets/eljamon.png'

const ModalInfoCustomer = ({setOpenInfoModal, currentCustomer}) => {

    console.log(currentCustomer)
  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col p-6 bg-white border-2 border-secondary rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5">
            <div className='w-full flex justify-end'>
                <img className='w-4 m-4 cursor-pointer' onClick={()=> setOpenInfoModal(false)} src={close} alt="" />
            </div>
            <div className='flex w-full'>
                <div className='w-1/2 m-4'>
                    <p className='text-4xl font-bold text-primary'>{currentCustomer.customer}</p>
                </div>
                <div className='w-1/2 flex justify-end items-center m-4'>
                    <img className='w-40 h-20 ' src={currentCustomer.image} alt="" />
                </div>
            </div>
            <p className='font-bold mt-14 text-primary'>Dirección:<span className='font-normal'>{currentCustomer.address}</span></p>
            <p className='font-bold text-primary'>Email:<span className='font-normal'> {currentCustomer.email}</span></p>
            <p className='font-bold text-primary'>Teléfono:<span className='font-normal'>{currentCustomer.tfno}</span></p>
            <p className='font-bold text-primary mb-14'>CIF:<span className='font-normal'>{currentCustomer.cif}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalInfoCustomer