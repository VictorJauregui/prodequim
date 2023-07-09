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
      {productosFiltrados.map((product) => {
        const cantidad = productsToBeBuilt.find((filterProduct) => {
          return filterProduct.producto === product.product;
        });
        
        return (
          <>
            <img src={product.image} alt="" />
            <p>{product.product}</p>
            <p>Total a producir: {cantidad.cantidad * 5} Litros</p>
          </>
        );
      })}
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
