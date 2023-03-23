import Products from "@/components/Products";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../configs/client/local";
import {
  addToCart,
  itemsCart,
  removeItemCart,
  statusCart,
  productStock,
} from "../../store/slices/cartSlice";

const Cart = ({ products, carts }) => {
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.cartSlice.cart);
  // console.log(carts.cartItems);
  const cartItems = carts.cartItems[0].orderItems;

  const handleStock = async (id, qtyStock) => {
    try {
      const product = products.find((item) => item._id === id);
      if (product.countInStock <= qtyStock) {
        window.alert("The number of products in stock has exceeded!");
        dispatch(productStock({ id, qtyStock: product.countInStock }));
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const itemPrice = cartItems.reduce(
    (init, current) => init + current.qty * current.price,
    0
  );

  return (
    <div>
      <Products dataProducts={products} />
      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 lg:pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <Link href={"/products"}>
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Close panel</span>
                            {/* Heroicon name: outline/x */}
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cartItems.map((product, index) => {
                            return (
                              <li key={index} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    width={0}
                                    height={0}
                                    src={product.img}
                                    alt=""
                                    className="h-full w-full object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{product.title}</a>
                                      </h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.info}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="w-1/3 flex justify-between">
                                      <button
                                        className="bg-red-500 px-2 text-white text-md"
                                        onClick={() =>
                                          dispatch(itemsCart(product._id))
                                        }
                                      >
                                        {" "}
                                        -{" "}
                                      </button>
                                      <button className="bg-red-500 px-2 text-white text-md">
                                        {" "}
                                        {product.qty}{" "}
                                      </button>
                                      <button
                                        className="bg-red-500 px-2 text-white text-md"
                                        onClick={() =>
                                          dispatch(addToCart(product)) &&
                                          handleStock(product._id, product.qty)
                                        }
                                      >
                                        {" "}
                                        +{" "}
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          dispatch(removeItemCart(product._id))
                                        }
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${itemPrice}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <Link
                          href={"/products"}
                          onClick={() => dispatch(statusCart(false))}
                        >
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> →</span>
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

export const getStaticProps = async () => {
  const { data } = await axios.get(`${API_URL}/api/products`);
  const carts = await axios.get(`${API_URL}/api/order`);

  return {
    props: { products: data, carts: carts.data },
  };
};
