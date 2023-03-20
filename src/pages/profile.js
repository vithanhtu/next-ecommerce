import React, { useEffect, useState } from "react";
import { getSession, useSession, signOut } from "next-auth/react";
import Cookies from "js-cookie";

const profile = ({}) => {
  const { data: session } = useSession(); // tạo biến session bằng data

  const user = session?.user;
  if (user?.accessToken) {
    Cookies.set("accessToken", user?.accessToken);
  }

  const handleSignOut = () => {
    Cookies.remove("accessToken");
    signOut();
  };

  return (
    <div>
      <h1 className="">User: {session && user?.email}</h1>
      <h2 className="">Email: {session && user?.username}</h2>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
