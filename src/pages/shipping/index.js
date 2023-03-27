import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setShipping } from "../../store/slices/cartSlice";

const checkout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckout = (payload) => {
    dispatch(setShipping(payload));
    router.push("/payment");
  };

  return (
    <div>
      <div className="leading-loose">
        <form
          className="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto"
          onSubmit={handleSubmit(handleCheckout)}
        >
          <p className="text-gray-800 font-medium">Shipping information</p>
          <div className>
            <label className="block text-sm text-gray-00" htmlFor="cus_name">
              Name
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              type="text"
              placeholder="Your Name"
              aria-label="Name"
              {...register("username", {
                required: true,
              })}
            />
          </div>
          {errors.username?.type === "required" && (
            <p className="text-red-600 text-xs italic">Username is required</p>
          )}
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Email
            </label>
            <input
              className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              type="email"
              {...register("email", {
                required: true,
              })}
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-red-600 text-xs italic">Email is required</p>
          )}
          <div className="mt-2">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Address
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              type="text"
              {...register("address", {
                required: true,
              })}
              placeholder="Street"
              aria-label="Email"
            />
          </div>
          {errors.address?.type === "required" && (
            <p className="text-red-600 text-xs italic">Address is required</p>
          )}
          <div className="mt-2">
            <label className="text-sm block text-gray-600" htmlFor="cus_email">
              City
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              type="text"
              required
              placeholder="City"
              aria-label="Email"
              {...register("city", {
                required: true,
              })}
            />
          </div>
          {errors.city?.type === "required" && (
            <p className="text-red-600 text-xs italic">City is required</p>
          )}
          <div className="mt-4">
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default checkout;
