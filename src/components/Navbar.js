import React, { useEffect, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import logo from "../../public/images/logo_ft.jpg";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../pages/cart";
import Link from "next/link";
import Image from "next/image";
import { getSession, useSession, signOut, getCsrfToken } from "next-auth/react";
import Cookies from "js-cookie";
import { getUser } from "../store/slices/authSlice";
import axios from "axios";
import { API_URL } from "@/configs/client/local";

const Navbar = ({ carts }) => {
  const { data: session } = useSession(); // tạo biến session bằng data
  const status = useSelector((state) => state.cartSlice.status);
  const cart = useSelector((state) => state.cartSlice.cart.cartItems);
  const [toggleUser, setToggleUser] = useState(false);
  const dispatch = useDispatch();

  const user = session?.user;
  if (user?.accessToken) {
    Cookies.set("accessToken", user?.accessToken);
  }

  useEffect(() => {
    dispatch(getUser(user));
  }, [user]);

  // useEffect(() => {
  //   getCsrfToken()
  //     .catch((e) => console.log(e))
  //     .then((t) => console.log(t));
  // }, []);

  const handleSignOut = () => {
    Cookies.remove("accessToken");
    signOut();
  };

  return (
    <div>
      <header className="border-b-2 border-gray-200 lg:py-0 py-6">
        <nav className="w-full smallTablet:w-full smallTablet:ml-3 md:mx-auto md:w-4/5 h-36 lg:h-20 flex justify-center md:justify-between flex-wrap items-center">
          <div className="logo">
            <Link href="/">
              <Image alt="" src={logo} className="logo"></Image>
            </Link>
          </div>
          <div>
            <ul className="header-menu flex justify-between my-5">
              <Link href="/" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  HOME
                </li>
              </Link>
              <Link href="/about" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  ABOUT
                </li>
              </Link>
              <Link href="/products" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  SHOP
                </li>
              </Link>
              <Link href={"/blog"} className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  BLOG
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
          <div className="header-info flex justify-center md:justify-end items-center font-medium">
            {session ? (
              <div
                className="flex items-center"
                onClick={() => setToggleUser(!toggleUser)}
              >
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-10 h-10 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {toggleUser ? (
                  <ul className="text-sm mx-2 pt-2">
                    <li>name: {session.user.username}</li>
                    <Link href={"/profile"} className="cursor-pointer">
                      Profile
                    </Link>
                    <li onClick={handleSignOut} className="cursor-pointer">
                      Log out
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div>
                <Link href={"/login"} className="login hover:text-yellow-500">
                  Login
                </Link>
                <span> / </span>
                <Link
                  href={"/register"}
                  className="Register hover:text-yellow-500"
                >
                  Register
                </Link>
              </div>
            )}

            <Link href={"/cart"} className="cart ml-5">
              <button className="cart">
                <span className="cart-quality text-sm text-black">
                  {cart.length}
                </span>
                <BsFillCartPlusFill className="text-2xl hover:text-yellow-500" />
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {status ? <Cart /> : ""}
    </div>
  );
};

export default Navbar;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const { data } = await axios.get(`${API_URL}/api/order`);
  const csrfToken = await getCsrfToken({ req });

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { session, carts: data, csrfToken },
  };
}
