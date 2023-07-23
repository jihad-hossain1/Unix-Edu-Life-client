import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Button, Drawer, Space } from "antd";
import { FaHouseUser, FaIndent } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Space className="lg:hidden flex items-center justify-between">
          <div className="mt-4 ml-2 ">
            <Button type="secondary" onClick={showDrawer}>
              <FaIndent className="text-2xl"></FaIndent>
            </Button>
          </div>
          <div className="text-xl font-semibold pr-5">{user?.displayName}</div>
        </Space>
        <Drawer
          title={user?.displayName}
          // placement={placement}
          placement="left"
          onClose={onClose}
          open={open}
          key={placement}
          width={270}
          // className="w-2/4 "
        >
          <ul className="space-y-6 text-md">
            <li>
              <NavLink
                to={`/dashboard/allusers`}
                className="flex items-center gap-4 hover:text-sky-600"
              >
                {" "}
                <FaPeopleRoof className="text-xl text-sky-600"></FaPeopleRoof>{" "}
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/additem`}
                className="flex items-center gap-4 hover:text-sky-600"
              >
                {" "}
                <FaPeopleRoof className="text-xl text-sky-600"></FaPeopleRoof>{" "}
                Add Collage
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`/dashboard`}
                className="flex items-center gap-4 hover:text-sky-600"
              >
                {" "}
                <FaHouseUser className="text-xl text-sky-600"></FaHouseUser>{" "}
                Dash-Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className="flex items-center gap-4 hover:text-sky-600"
              >
                {" "}
                <FaHouseUser className="text-xl text-sky-600"></FaHouseUser>{" "}
                Back-Home
              </NavLink>
            </li>
          </ul>
        </Drawer>
        <div className="lg:hidden py-10 bg-sky-50 bg-opacity-20">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="hidden lg:block ">
        <div className="grid grid-cols-6 gap-2 ">
          <div className=" min-h-screen border-0 border-r-2 px-5 pt-4">
            <ul className="space-y-6 text-md">
              <li>
                <NavLink
                  to={`/dashboard/allusers`}
                  className="flex items-center gap-4 hover:text-sky-600"
                >
                  {" "}
                  <FaPeopleRoof className="text-xl text-sky-600"></FaPeopleRoof>{" "}
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/dashboard/additem`}
                  className="flex items-center gap-4 hover:text-sky-600"
                >
                  {" "}
                  <FaPeopleRoof className="text-xl text-sky-600"></FaPeopleRoof>{" "}
                  Add Collage
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/dashboard`}
                  className="flex items-center gap-4 hover:text-sky-600"
                >
                  {" "}
                  <FaHouseUser className="text-xl text-sky-600"></FaHouseUser>{" "}
                  Dash-Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/`}
                  className="flex items-center gap-4 hover:text-sky-600"
                >
                  {" "}
                  <FaHouseUser className="text-xl text-sky-600"></FaHouseUser>{" "}
                  Back-Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-4  w-full min-h-screen py-10 bg-sky-50 bg-opacity-20 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
