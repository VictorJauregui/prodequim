import React, { useContext, useState } from 'react'
import close from '../../assets/close.png'
import orderContext from '../../context/orderContext/OrderContext';

const ModalNewProduct = ({setOpenModalNewProduct, openModalNewProduct}) => {
    const {addProduct} = useContext(orderContext)
    const [previewImg, setPreviewImg] = useState(null);

    const [newProduct, setNewProduct] = useState({
        product:"",
        image:""
    })

    const inputHandleChange = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, image: e.target.files[0]});
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPreviewImg(reader.result);
        };
      };

      const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("product", newProduct.product)
        formData.append("image", newProduct.image)

        
        addProduct(formData)
        setOpenModalNewProduct(false)
    }

  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col p-6 bg-white border-2 border-secondary rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-1/5">
            <div className="flex  mb-4">
                <p className="text-2xl font-bold w-2/3 text-primary ">NUEVO PRODUCTO</p>
                <div className="flex justify-end w-1/3">
                    <img className="w-4 h-4  mx-2 cursor-pointer" src={close}  alt="" onClick={()=> setOpenModalNewProduct(false)} />
                </div>
            </div>
            <form className='flex flex-col justify-center  mt-4 '>
                <div className='flex flex-col'>
                    <label className='text-primary mb-2'>Nombre del producto</label>
                    <input type="text" className='bg-gray-200 w-full text-gray-500 rounded'
                    name="product"
                    value={newProduct.product}
                    onChange={inputHandleChange} />
                </div>
                <div className='flex w-full' >
                    <label className='w-2/5' >
                        <p className=' text-primary mt-4'>Imagen</p>
                        {
                            !previewImg ?
                            <>
                            <div className=' h-[10rem] rounded cursor-pointer bg-gray-200 flex items-center justify-center border-dashed border-2 border-primary'>
                                <p className='text-gray-400 font-semibold'>Subir Imagen</p>
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
                        <button type="submit" className='px-5 py-2 bg-primary rounded text-white' onClick={(e)=>handleSubmit(e)}>Finalizar</button>
                    </div>
                </div>

            </form>
          </div>
        </div>
       </div>
    </div>
  )
}

export default ModalNewProduct