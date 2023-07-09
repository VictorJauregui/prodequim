import React, { useEffect, useState } from "react";
import orderContext from "./OrderContext";
import { toast } from "react-hot-toast";

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState();
  const [dataCustomers, setDataCustomers] = useState([]);
  const [dataOrders, setDataOrders] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);

  const newOrderByServidor = async (newOrder) => {
    const res = await fetch("http://localhost:4008/order/add-new-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    const data = await res.json();
    if (data.ok){
      toast.success("Tu pedido ha sido creado con éxito")
    } else {
      toast.error("Algo salió mal. Inténtalo de nuevo")
    }
    setDataOrders([...dataOrders, data.newOrder]);
  };

  const addCustomer = async (formData) => {
    const res = await fetch("http://localhost:4008/customer/add-new-customer", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data.ok) {
      toast.success("Cliente subido con éxito");
    }
  };

  const addProduct = async (formData) => {
    const res = await fetch("http://localhost:4008/product/add-new-product", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data.ok) {
      toast.success("Producto subido con éxito");
    } else {
      toast.error("Ha ocurrido un error");
    }
  };

  const getAllCustomer = async () => {
    const res = await fetch("http://localhost:4008/customer/customers");
    const data = await res.json();
    setDataCustomers(data.customers);
  };

  useEffect(() => {
    getAllCustomer();
  }, []);

  const getAllProducts = async () => {
    const res = await fetch("http://localhost:4008/product/products");
    const data = await res.json();
    setDataProducts(data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllOrders = async () => {
    const res = await fetch("http://localhost:4008/order/orders");
    const data = await res.json();
    setDataOrders(data.orders);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const updateOrder = async (orderId, newValue) => {
    const res = await fetch("http://localhost:4008/order/update-order", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId, newValue }),
    });
    const data = await res.json();

    const updateOrders = dataOrders.map((order) => {
      if (order._id === data.orderChanged._id) {
        return data.orderChanged;
      } else {
        return order;
      }
    });
    setDataOrders(updateOrders);
  };

  const orderFinished = async (orderId, newValue) => {
    const res = await fetch("http://localhost:4008/order/order-finished", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId, newValue }),
    });
    const data = await res.json();
  
    if (data.ok) {
      toast.success(
        'El pedido ha sido archivado con éxito. Puedes verlo en "pedidos finalizados"'
      );
    }
    const updateOrders = dataOrders.map((order) => {
      if (order._id === data.orderChanged._id) {
        return data.orderChanged;
      } else {
        return order;
      }
    });
    setDataOrders(updateOrders);
  };


  const deleteOrder = async (id) => {
    const res = await fetch(`http://localhost:4008/order/delete-order/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const ordersFiltered = dataOrders.filter((ord) => {
      return ord._id !== data.id
    })
    setDataOrders(ordersFiltered)

  }



  return (
    <orderContext.Provider
      value={{
        order,
        setOrder,
        newOrderByServidor,
        addCustomer,
        dataCustomers,
        setDataCustomers,
        dataOrders,
        updateOrder,
        orderFinished,
        addProduct,
        dataProducts,
        deleteOrder
      }}
    >
      {children}
    </orderContext.Provider>
  );
};

export default OrderProvider;
