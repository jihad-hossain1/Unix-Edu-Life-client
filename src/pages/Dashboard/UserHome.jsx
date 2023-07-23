import React from "react";
import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center md:mt-14">
      <img
        src={user?.photoURL}
        className="w-[200px] rounded-md border p-1 shadow"
        alt=""
      />
      <h2 className="text-xl font-semibold">{user?.displayName}</h2>
    </div>
  );
};

export default UserHome;
