import { useGetAllOrdersMutation } from "@/redux/api/adminApi";
import React, { useEffect, useState } from "react";

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [getAllOders, { isSuccess, isError, isLoading }] = useGetAllOrdersMutation();
  useEffect(() => {
  getAllOders
  }, [])
  return (
    <div className="w-[1200px] justify-center text-pale">
      <div className="h-[720px] pr-14 overflow-auto no-scrollbar">
        <ul className="">
          {orders.map((order, index) => {
            return (
              <li
                key={order.id}
                className="p-6 border-b flex justify-center flex-row"
              >
                <div className="px-4">
                  <span className="text-xl font-semibold ">{order.title}</span>
                  <span className="block text-sm mt-2">
                    Description : {order.desc}
                  </span>
                </div>
                <div className="px-3">
                  <span>Customer Name</span>
                </div>
                <div className="px-3">
                  <span>Customer ID</span>
                </div>
                <div className="px-4">
                  <span className="text-sm font-semibold p-3">
                    Price : {order.price}
                  </span>
                  <span className="p-6">x {order.qty} </span>
                </div>
                <div className="px-3"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OrdersAdmin;
