import React, { useState } from 'react'
import eljamon from '../assets/eljamon.png'
import close from '../assets/close.png'
import finish from '../assets/finish.png'
import finishDone from '../assets/finishDone.png'
import logoTransparent from '../assets/logo-transparent.png'

const ModalOrder = ({setopenModal}) => {
    const [finished, setfinished] = useState(false)

  

    const TaskFinished = () => {
        setfinished(true)
    }
    const TaskNotFinished = () => {
        setfinished(false)
    }

  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col bg-white border-2 border-secondary rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5 ">
            <div className='w-full flex justify-end'>
                <img className='w-4 m-4 cursor-pointer' src={close} onClick={()=> setopenModal(false)} alt="" />
            </div>
            <div className='flex w-full'>
                <div className='w-1/2 m-4'>
                    <p className='text-4xl font-bold text-primary'>El jamón</p>
                    <p className='font-bold text-gray-500 mt-2'>Fecha pedido: <span>23-10-2023</span></p>
                </div>
                <div className='w-1/2 flex justify-end items-center m-4'>
                    <img className='max-h-20 min-h-20' src={eljamon} alt="" />
                </div>
            </div>
            <p className='text-primary text-2xl ml-4 mt-4'>Detalles del pedido</p>
            <div className='bg-gray-200 mx-4 rounded mt-2 p-4 mb-10'>
                <div className='flex w-full font-semibold text-primary mb-4 '>
                    <p className='w-3/5'>Producto</p>
                    <p className='w-2/5'>Cantidad</p>
                </div>
                <div className='flex w-full text-primary py-2 border-b border-gray-300 items-center'>
                    <p className=' w-3/5'>Detergente de máquinas</p>
                    <p className='w-1/5'>144</p>
                    {
                        !finished ?
                        <img className='max-h-5 cursor-pointer' src={finish} alt="finished" onClick={TaskFinished} />
                        : 
                        <div className='flex items-center gap-3'>
                            <img className='max-h-5 cursor-pointer' src={finishDone} alt="finished" onClick={TaskNotFinished} />
                            <p>Terminado</p>
                        </div>
                    }
                </div>
                <div className='flex w-full text-primary py-2 border-b border-gray-300 items-center'>
                    <p className=' w-3/5'>Gel de manos</p>
                    <p className='w-1/5'>144</p>
                    {
                        !finished ?
                        <img className='max-h-5 cursor-pointer' src={finish} alt="finished" onClick={TaskFinished} />
                        : 
                        <div className='flex items-center gap-3'>
                            <img className='max-h-5 cursor-pointer' src={finishDone} alt="finished" onClick={TaskNotFinished} />
                            <p>Terminado</p>
                        </div>
                    }
                </div>
                <div className='flex w-full text-primary py-2 border-b border-gray-300 items-center'>
                    <p className=' w-3/5'>Limpiacristales</p>
                    <p className='w-1/5'>144</p>
                    {
                        !finished ?
                        <img className='max-h-5 cursor-pointer' src={finish} alt="finished" onClick={TaskFinished} />
                        : 
                        <div className='flex items-center gap-3'>
                            <img className='max-h-5 cursor-pointer' src={finishDone} alt="finished" onClick={TaskNotFinished} />
                            <p>Terminado</p>
                        </div>
                    }
                </div>
            </div>
            <div className='flex mb-4'>
                <div>
                    <img className='max-h-28' src={logoTransparent} alt="" />
                </div>
                <div className='flex items-center justify-end gap-6 w-full mr-4'>
                    <button className='bg-red-500 py-2 px-5 rounded text-white'>Eliminar</button>
                    <button className='bg-secondary py-2 px-5 rounded text-white'>Editar</button>
                    <button className='bg-green-600 py-2 px-5 rounded text-white'>Finalizar</button>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOrder