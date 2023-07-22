import { Badge, Drawer, Space } from "antd";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

const CartBadge = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const carts = [
    { name: "ali", age: 23 },
    { name: "ali", age: 23 },
    { name: "ali", age: 23 },
  ];
  return (
    <div>
      <Space size="large">
        <Badge count={1}>
          <AiOutlineShoppingCart
            onClick={showDrawer}
            className="text-[28px]"
          ></AiOutlineShoppingCart>
        </Badge>
      </Space>
      <Drawer
        placement="bottom"
        width={250}
        onClose={onClose}
        open={open}
        closeIcon={
          <AiOutlineClose className="text-xl hover:text-sky-600 text-center"></AiOutlineClose>
        }
      >
        {carts.length || 0 ? (
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        ) : (
          <div>Your card is empty enroll any course</div>
        )}
      </Drawer>
    </div>
  );
};

export default CartBadge;
