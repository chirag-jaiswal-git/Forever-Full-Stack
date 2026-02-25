import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {

  const { backendURL,token , currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
       if (!token) {
    return;
  }

      const response = await axios.get(
        backendURL + "/api/order/userorders",
        {
          headers:{
             token: token
          }
        }
      );


      if (response.data.success) {


        let allOrdersItems = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {

            allOrdersItems.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date
            });

          });
        });

        setOrderData(allOrdersItems.reverse());
      }

    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Correct Hook Placement
  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 border-b border-t py-4 text-gray-700 md:justify-between md:items-center"
          >

            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.images[0]} alt="" />

              <div>
                <p className="sm:text-base font-medium">{item.name}</p>

                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p className="text-lg">{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>

                <p className="mt-1">
                  Date:
                  <span className="text-gray-600">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </p>

                <p className="mt-1">
                  Payment Method:
                  <span className="text-gray-600">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>

              <button
                onClick={loadOrderData}
                className="border px-4 py-2 text-sm font-medium rounded-sm"
              >
                Track Order
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
