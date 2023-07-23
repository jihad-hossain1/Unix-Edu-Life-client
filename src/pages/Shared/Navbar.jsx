import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { HiUser, HiOutlineHeart, HiCog6Tooth } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import logoImg from "../../assets/images/logo/education.png";
import { Drawer, Space, Dropdown } from "antd";

import Search from "../../components/Search/Search";
import CartBadge from "../../components/cart/CartBadge";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      key: "1",
      label: (
        <Link to={``} className="flex gap-2 items-center">
          <HiOutlineHeart className="text-2xl text-sky-600"></HiOutlineHeart>{" "}
          <span className="">Favorite</span>{" "}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={``} className="flex gap-2 items-center">
          <HiUser className="text-2xl text-sky-600"></HiUser>{" "}
          <span className="">Profile</span>{" "}
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to={`/dashboard`} className="flex gap-2 items-center">
          <HiCog6Tooth className="text-2xl text-sky-600"></HiCog6Tooth>{" "}
          <span className="">Dashboard</span>{" "}
        </Link>
      ),
    },

    {
      key: "4",
      label: (
        <button
          onClick={logOut}
          className="border border-sky-500 px-2  rounded shadow font-semibold"
        >
          LogOut
        </button>
      ),
    },
  ];
  return (
    <>
      <Container>
        <div className="flex justify-between pt-2 pb-2">
          <ul className="flex items-center space-x-4 text-xl">
            <li>
              <AiFillFacebook className="hover:text-blue-700"></AiFillFacebook>
            </li>
            <li>
              <AiFillGithub className="hover:text-blue-700"></AiFillGithub>
            </li>
            <li>
              <AiFillTwitterCircle className="hover:text-blue-500"></AiFillTwitterCircle>
            </li>
            <li>
              <AiFillInstagram className="hover:text-sky-500"></AiFillInstagram>
            </li>
          </ul>
          <ul className="flex items-center space-x-5">
            {user ? (
              <>
                <div
                  onClick={(e) => e.preventDefault()}
                  className="flex gap-2"
                  title={user?.displayName}
                >
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottom"
                  >
                    <Space>
                      <div className="avatar cursor-pointer">
                        <div className="w-8 rounded-full">
                          <img
                            src={
                              user?.photoURL || (
                                <HiUser className="text-4xl text-gray-600"></HiUser>
                              )
                            }
                          />
                        </div>
                      </div>
                    </Space>
                  </Dropdown>
                </div>
              </>
            ) : (
              <>
                <li className="rounded  inline-block px-4 py-2 cursor-pointer ">
                  <Link to="/login">LogIn</Link>
                </li>
              </>
            )}
            <div className="divider-horizontal text-neutral-400">|</div>
            <li>
              <Link to={`register`}>
                <button disabled={user}>Register</button>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      {/* <div className="hidden md:divider mb-0"></div> */}
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <Container>
        <div className="hidden md:flex justify-between items-center mt-2">
          <Link to={`/`} className="flex items-center space-x-1">
            <img src={logoImg} className="w-10" alt="" />
            <h4 className="uppercase text-2xl text-neutral-600">unix</h4>
          </Link>
          <ul className="flex items-center md:space-x-3 lg:space-x-8 xl:space-x-12">
            <li className="hover:font-semibold border-sky-500 hover:border-b-[1px] transition-[2s]">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="hover:font-semibold border-sky-500 hover:border-b-[1px] transition-[2s]">
              <Link to={`/colleges`}>Colleges</Link>
            </li>
            <li className="hover:font-semibold border-sky-500 hover:border-b-[1px] transition-[2s]">
              <Link to={`/admission`}>Admission</Link>
            </li>
            <li className="hover:font-semibold border-sky-500 hover:border-b-[1px] transition-[2s]">
              <Link to={`/mycollage`}>My Collage</Link>
            </li>
            <li>
              <Search></Search>
            </li>
            <li>
              <CartBadge></CartBadge>
            </li>
          </ul>
        </div>
      </Container>

      {/* for mobile devices  */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-6 mt-2">
          <Link
            to={`/`}
            className="flex items-center space-x-[3px] sm:space-x-1"
          >
            <img src={logoImg} className="w-10 mt-2" alt="" />
            <h4 className="uppercase text-xl md:text-2xl text-neutral-600">
              unix
            </h4>
          </Link>
          <div className="flex items-center space-x-2">
            <Search></Search>
            <AiOutlineMenu
              onClick={showDrawer}
              className="text-2xl cursor-pointer"
            ></AiOutlineMenu>
            <CartBadge></CartBadge>
          </div>
        </div>
        <Drawer
          placement="left"
          width={250}
          onClose={onClose}
          open={open}
          closeIcon={
            <AiOutlineClose className="text-xl hover:text-sky-600 text-center"></AiOutlineClose>
          }
        >
          <ul className="flex flex-col space-y-4 px-2 ">
            <li className="hover:font-semibold transition-[2s] ">
              <Link to={`/`} className="border-sky-500 hover:border-b-[1px]">
                Home
              </Link>
            </li>
            <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <li className="hover:font-semibold transition-[2s] ">
              <Link
                to={`/colleges`}
                className="border-sky-500 hover:border-b-[1px]"
              >
                Colleges
              </Link>
            </li>
            <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <li className="hover:font-semibold transition-[2s] ">
              <Link
                to={`/admission`}
                className="border-sky-500 hover:border-b-[1px]"
              >
                Admission
              </Link>
            </li>
            <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <li className="hover:font-semibold  transition-[2s] ">
              <Link
                to={`/mycollage`}
                className="border-sky-500 hover:border-b-[1px]"
              >
                My Collage
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
