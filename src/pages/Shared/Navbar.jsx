import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillCaretDown,
  AiOutlineSearch,
  AiOutlineMenu,
  AiTwotoneHome,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import logoImg from "../../assets/images/logo/education.png";
import { Drawer, Badge, Space } from "antd";

import Search from "../../components/Search/Search";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
              <AiFillInstagram className="hover:text-pink-500"></AiFillInstagram>
            </li>
          </ul>
          <ul className="flex items-center space-x-5">
            <li>
              <Link to={`login`}>Login</Link>
            </li>
            <div className="divider-horizontal text-neutral-400">|</div>
            <li>
              <Link to={`register`}>Register</Link>
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
            <li>
              <Search></Search>
            </li>
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
            <Space size="large">
              <Badge count={1}>
                <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
              </Badge>
            </Space>
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
