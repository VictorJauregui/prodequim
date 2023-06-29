import React, { useContext, useState } from 'react';
import close from '../assets/close.png';
import logoTransparent from '../assets/logo-transparent.png';
import orderContext from '../context/orderContext/OrderContext';

const ModalNewOrder = ({setopenModalOrder}) => {
    const {newOrderByServidor} = useContext(orderContext)
  const [productos, setProductos] = useState([{ producto: '', cantidad: '' }]);
  const [newOrder, setNewOrder] = useState({
    customer: "El jamon",
    order: productos,
  })


  
  const handleAddProducto = (e) => {
    e.preventDefault();
    setProductos([...productos, { producto: '', cantidad: '' }]);
    setNewOrder({ ...newOrder, order: [...productos, { producto: '', cantidad: '' }] });
  };
  
  const handleProductoChange = (index, e) => {
    const updatedProductos = [...productos];
    updatedProductos[index].producto = e.target.value;
    setProductos(updatedProductos);
    setNewOrder({ ...newOrder, order: updatedProductos });
  };
  
  const handleCantidadChange = (index, e) => {
    const updatedProductos = [...productos];
    updatedProductos[index].cantidad = e.target.value;
    setProductos(updatedProductos);
    setNewOrder({ ...newOrder, order: updatedProductos });
  };
    
    const handleNewOrder = (e) => {
      setNewOrder({...newOrder, [e.target.name]: e.target.value })
    }

    const handleFinishOrder = (e) => {
        e.preventDefault()
        newOrderByServidor(newOrder)
    }

  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto bg-black/70 z-30">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col bg-white border-2 border-secondary rounded-lg shadow-lg w-[90%] sm:w-2/3 md:w-3/5 xl:w-1/2 2xl:w-2/5">
            <div className="flex m-4">
              <p className="text-2xl font-bold w-1/2 text-primary">NUEVO PEDIDO</p>
              <div className="flex justify-end w-1/2">
                <img onClick={()=>setopenModalOrder(false)} className="w-4 h-4  mx-2 cursor-pointer" src={close} alt="" />
              </div>
            </div>
            <div className="w-full">
              <form className="flex flex-col mx-4">
                <label className="text-primary font-bold text-xl">Cliente</label>
                <select className="bg-gray-200 full h-[2rem] rounded" name="customer" onChange={handleNewOrder}>
                  <option name="El jamón">El jamón</option>
                  <option name="Cabeco">Cabeco</option>
                  <option name="Servicenca">Servicenca</option>
                </select>
                <p className="text-primary font-bold mt-6 text-xl">Pedido</p>
                <div className="flex w-full mx-5 mt-5 gap-2">
                  <p className="w-[85%] text-primary">Producto</p>
                  <p className="w-[15%] text-primary">Cantidad</p>
                </div>
                {productos.map((producto, index) => (
                  <div className="flex w-full ml-5 mt-5 gap-2" key={index}>
                    <input
                      className="w-[84%] border-b border-gray-400 focus:outline-none"
                      type="text"
                      placeholder="Detergente"
                      value={producto.producto}
                      onChange={(e) => handleProductoChange(index, e)}
                    />
                    <input
                      className="w-[10%] mr-5 border-b border-gray-400 focus:outline-none"
                      type="text"
                      placeholder="144"
                      value={producto.cantidad}
                      onChange={(e) => handleCantidadChange(index, e)}
                    />
                  </div>
                ))}
                    <div className="flex justify-center">
                    <button
                        className="border-2 border-secondary hover:bg-secondary my-4 rounded px-4 py-2 font-semibold text-primary"
                        name="añadir"
                        onClick={handleAddProducto}>Añadir producto</button>
                    </div>
                    <div className='flex mb-4'>
                        <div>
                            <img className='max-h-28' src={logoTransparent} alt='' />
                        </div>
                        <div className='flex items-center justify-end gap-6 w-full mr-4'>
                            <button className='bg-primary py-2 px-5 rounded text-white' onClick={handleFinishOrder}>Finalizar pedido</button>
                        </div>
                    </div>
            </form>
        </div>
    </div>
    </div>
    </div>
</div>
);
};

export default ModalNewOrder;