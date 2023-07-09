import React, { useContext } from "react";
import Menu from "../components/Menu";
import orderContext from "../context/orderContext/OrderContext";

const FabricationPage = () => {
  const { dataOrders, dataProducts } = useContext(orderContext);

  const productsToBeBuilt = agruparProductosNoFinalizados(dataOrders);
  const productosFiltrados = filtrarProductos(dataProducts, productsToBeBuilt);



  return (
    <div className="bg-primary min-h-screen pb-20">
      <Menu />
      <div className='flex mt-10 text-xl px-10 md:px-20'>
        <p className="text-white">Fabricación</p>
      </div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full px-10 md:px-20 mt-6 ">
        
          {productosFiltrados.map((product) => {
            const cantidad = productsToBeBuilt.find((filterProduct) => {
              return filterProduct.producto === product.product;
            });
            return (
              <div className=" flex bg-white border border-r rounded p-2" >
                <img className="w-28" src={product.image} alt="" />
                <div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg sm:text-2xl text-primary border-b border-primary w-full">{product.product}</p>
                    <div className="flex flex-col  h-full mt-3">
                      <p className="font-normal sm:text-xl text-primary">Total cajas pedidas: <span className="font-bold">{cantidad.cantidad / 4} Cajas</span> </p>
                      <p className="font-normal sm:text-xl text-primary">Total a producir: <span className="font-bold">{cantidad.cantidad * 5} Litros</span> </p>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        

      </div>
    </div>
  );
};

export default FabricationPage;

function agruparProductosNoFinalizados(productos) {
  const productosAgrupados = {};

  for (const item of productos) {
    if (!item.finished) {
      for (const order of item.order) {
        if (order.estado !== "finished") {
          if (!productosAgrupados[order.producto]) {
            productosAgrupados[order.producto] = {
              producto: order.producto,
              cantidad: 0,
              ids: [],
            };
          }
          productosAgrupados[order.producto].cantidad += order.cantidad;
          productosAgrupados[order.producto].ids.push(order._id);
        }
      }
    }
  }

  const resultado = Object.values(productosAgrupados);
  return resultado;
}

function filtrarProductos(dataProducts, productoToBeBuilt) {
  const productosFiltrados = [];

  for (const producto of productoToBeBuilt) {
    const productoEncontrado = dataProducts.find(
      (item) => item.product === producto.producto
    );

    if (productoEncontrado) {
      productosFiltrados.push(productoEncontrado);
    }
  }

  return productosFiltrados;
}
