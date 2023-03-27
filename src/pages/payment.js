import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "@/configs/client/local";
import { useRouter } from "next/router";

const payment = () => {
  const carts = useSelector((state) => state.cartSlice.cart.cartItems);
  const shipping = useSelector((state) => state.cartSlice.cart.shipping);
  const router = useRouter();
  const user = useSelector((state) => state.authSlice.user);
  const shipPrice = 8;
  const totalItemPrice = carts.reduce(
    (init, current) => init + current.qty * current.price,
    0
  );
  const cloneCarts = carts.map((item) => {
    return {
      title: item.title,
      img: item.img,
      qty: item.qty,
      price: item.price,
    };
  });

  const [payment, setPayment] = useState(null);

  const handleOrder = async () => {
    if (carts && shipping && payment) {
      const { data } = await axios.post(`${API_URL}/api/order/post`, {
        user: user?._id,
        orderItems: cloneCarts,
        shippingAddress: shipping,
        paymentMethod: payment,
        itemsPrice: totalItemPrice,
        shippingPrice: shipPrice,
        totalPrice: totalItemPrice + shipPrice,
      });

      if (data) {
        router.push("/order");
      }
    }
  };

  return (
    <div className="flex justify-center mt-28 pb-36">
      <div>
        <div className="my-5">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Identification
          </h3>
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  onClick={() => setPayment("paypal")}
                  id="list-radio-license"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  paypal{" "}
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  onClick={() => setPayment("stripe")}
                  id="list-radio-id"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-id"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Stripe
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  onClick={() => setPayment("cash")}
                  name="list-radio"
                  id="list-radio-millitary"
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-millitary"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Cash
                </label>
              </div>
            </li>
          </ul>
        </div>

        <button
          onClick={handleOrder}
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default payment;
