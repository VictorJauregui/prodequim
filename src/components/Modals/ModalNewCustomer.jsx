import React, { useContext, useEffect, useState } from 'react'
import close from '../../assets/close.png'
import orderContext from '../../context/orderContext/OrderContext';

const ModalNewCustomer = ({setOpenModal}) => {
    const { addCustomer } = useContext(orderContext)
    const [previewImg, setPreviewImg] = useState(null);
    const [newCustomer, setNewCustomer] = useState({
        customer:"",
        address: "",
        email: "",
        tfno: "",
        cif:"",
        image:"hola"

    })

    const handleChange = (e) => {
        setNewCustomer({ ...newCustomer, image: e.target.files[0]});
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPreviewImg(reader.result);
        };
      };


    const handleInputChange = (e) => {
        setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value })
    }

    useEffect(() => {
      
    }, [setNewCustomer])
    

        const handleSubmit = (e) => {
            e.preventDefault()
            const formData = new FormData();
            formData.append("customer", newCustomer.customer)
            formData.append("address", newCustomer.address)
            formData.append("email", newCustomer.email)
            formData.append("tfno", newCustomer.tfno)
            formData.append("cif", newCustomer.cif)
            formData.append("image", newCustomer.image)
            
            addCustomer(formData)
            setOpenModal(false)
        }


  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col p-6 bg-white border-2 border-secondary rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5">
          <div className="flex ml-4 mb-4">
              <p className="text-2xl font-bold w-1/2 text-primary">NUEVO CLIENTE</p>
              <div className="flex justify-end w-1/2">
                <img className="w-4 h-4  mx-2 cursor-pointer" src={close} onClick={()=>setOpenModal(false)} alt="" />
              </div>
            </div>
            <form encType="multipart/form-data" className='mx-4' >
                <div className='flex flex-col '>
                    <label className='font-bold text-lg text-primary'>Empresa</label>
                    <input type="text" className='bg-gray-200 rounded h-[2rem]'
                    name="customer"
                    value={newCustomer.customer} 
                    onChange={handleInputChange}
                    />
                </div>
                <div className='flex flex-col  mt-4'>
                    <label className='font-bold text-lg text-primary'>Dirección</label>
                    <input type="text" className='bg-gray-200 rounded h-[2rem]'
                    name="address"
                    value={newCustomer.address} 
                    onChange={handleInputChange}/>
                </div>
                <div className='flex mt-4 gap-3'>
                    <div className='w-1/3'>
                        <label className='font-bold text-lg text-primary'>Email</label>
                        <input type="text" className='bg-gray-200 rounded h-[2rem] w-full'
                        name="email"
                        value={newCustomer.email}
                        onChange={handleInputChange} />
                    </div>
                    <div className='w-1/3'>
                        <label className='font-bold text-lg text-primary'>Teléfono</label>
                        <input type="text" className='bg-gray-200 rounded h-[2rem] w-full'
                        name="tfno"
                        value={newCustomer.tfno}
                        onChange={handleInputChange}  />
                    </div>
                    <div className='w-1/3'>
                        <label className='font-bold text-lg text-primary'>CIF</label>
                        <input type="text" className='bg-gray-200 rounded h-[2rem] w-full'
                        name="cif"
                        value={newCustomer.cif}
                        onChange={handleInputChange}  />
                    </div>
                </div>
                <div className='flex w-full' >
                    <label className='w-2/5' >
                        <p className='font-bold text-lg text-primary mt-4'>Logo de la empresa</p>
                        {
                            !previewImg ?
                            <>
                            <div className=' h-[10rem] rounded cursor-pointer bg-gray-200 flex items-center justify-center border-dashed border-2 border-primary'>
                                <p className='text-gray-400 font-semibold'>Subir Logo</p>
                            </div>
                            <input type="file" className='hidden' 
                            name="image"
                            onChange={handleChange}/>
                            </> : 
                            <div className="border rounded ">
                            <img className="min-h-[10rem] max-h-[10rem] min-w-full " src={previewImg ? previewImg : ""} alt="" />
                          </div>
                        }
                    </label>
                    <div className='w-3/5 flex items-end justify-end '>
                        <button type="submit" className='px-5 py-2 bg-primary rounded text-white' onClick={(e)=>handleSubmit(e)}>Finalizar registro</button>
                    </div>
                </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalNewCustomer