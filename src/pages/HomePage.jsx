import React, { useContext, useState, useMemo } from "react";
import Menu from "../components/Menu";
import plus from "../assets/plus.png";
import CardOrder from "../components/CardOrder";
import ModalOrder from "../components/Modals/ModalOrder";
import ModalNewOrder from "../components/Modals/ModalNewOrder";
import orderContext from "../context/orderContext/OrderContext";

const HomePage = () => {
  const [openModal, setopenModal] = useState(false);
  const [openModalOrder, setopenModalOrder] = useState(false);
  const { dataOrders } = useContext(orderContext);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [inProcess, setInprocess] = useState(true);

  const ordersInProcess = useMemo(
    () =>
      dataOrders.filter((order) => {
        return order?.finished === false;
      }),
    [dataOrders]
  );
  const orderFinished = useMemo(
    () =>
      dataOrders
        .filter((order) => {
          return order?.finished === true;
        })
        .reverse(),
    [dataOrders]
  );

  return (
    <div className="bg-primary min-h-screen pb-20">
      <Menu />
      <div className="flex mt-10 text-xl mx-10 md:mx-20">
        <div className="flex gap-4 md:gap-8 items-center">
          <p
            className={
              !inProcess
                ? "text-white  text-sm lg:text-lg cursor-pointer"
                : "text-sm md:text-2xl font-bold  text-secondary cursor-pointer"
            }
            onClick={() => setInprocess(true)}
          >
            Producción
          </p>
          <p
            className={
              inProcess
                ? "text-white  text-sm lg:text-lg cursor-pointer"
                : "text-sm md:text-2xl font-bold  text-secondary cursor-pointer"
            }
            onClick={() => setInprocess(false)}
          >
            Finalizados
          </p>
        </div>
        <div className="w-full flex justify-end ">
          <div
            onClick={() => setopenModalOrder(true)}
            className="flex justify-center px-2 bg-secondary rounded h-[2rem] items-center text-primary font-bold cursor-pointer gap-2"
          >
            <img className="w-5" src={plus} alt="" />
            <p className="flex ">
              Nuevo&nbsp;<span className="hidden md:flex ">pedido</span>{" "}
            </p>
          </div>
        </div>
      </div>
      {inProcess ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-12 md:px-20  gap-6 mt-10 w-full ">
          {ordersInProcess.map((order) => {
            return (
              <CardOrder
                setopenModal={setopenModal}
                order={order}
                openModal={openModal}
                setCurrentOrder={setCurrentOrder}
                ordersInProcess={ordersInProcess}
              />
            );
          })}
          {openModalOrder && (
            <ModalNewOrder setopenModalOrder={setopenModalOrder} />
          )}
          {openModal && (
            <ModalOrder
              setopenModal={setopenModal}
              order={currentOrder}
              setCurrentOrder={setCurrentOrder}
            />
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-12 md:px-20  gap-6 mt-10 w-full ">
          {orderFinished.map((order) => {
            return (
              <CardOrder
                setopenModal={setopenModal}
                order={order}
                openModal={openModal}
                setCurrentOrder={setCurrentOrder}
              />
            );
          })}
          {openModalOrder && (
            <ModalNewOrder setopenModalOrder={setopenModalOrder} />
          )}
          {openModal && (
            <ModalOrder
              setopenModal={setopenModal}
              order={currentOrder}
              orderFinished={orderFinished}
              setCurrentOrder={setCurrentOrder}
              isFinished={true}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
