import React from "react";
import { Button, Modal } from "antd";
import Swal from "sweetalert2";
// import { toast } from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";

const UpdateUser = ({ setModal2Open, modal2Open, refetch, item }) => {
  const updateUserInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const location = form.location.value;
    const updateInfo = { name, address, location };
    // console.log(updateInfo);
    fetch(`${import.meta.env.VITE_BASE_URL}/users/${item?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("User Information Update successfull");
          form.reset();
          refetch();
        }
        // console.log(data);
      });
  };
  return (
    <>
      <Toaster></Toaster>
      <Modal
        title={item?.name}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <form action="" onSubmit={updateUserInfo} className="p-4">
          <h4 className="text-center font-semibold text-xl pb-4 underline text-neutral-700">
            Update Your Info
          </h4>
          <div className="mb-2">
            <input
              type="text"
              name="name"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none  focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
              id=""
              defaultValue={
                item?.name || <span className="text-sm">Unknown</span>
              }
              placeholder="Your Name"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="location"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none  focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
              id=""
              placeholder="Location"
              defaultValue={
                item?.location || <span className="text-sm">Unknown</span>
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none  focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
              id=""
              placeholder="Address"
              defaultValue={
                item?.address || <span className="text-sm">Unknown</span>
              }
            />
          </div>
          <div>
            <input
              type="submit"
              value="Update"
              className="bg-white border-b-[2px]  py-3 px-2 w-full  rounded-md hover:bg-sky-50 mt-2 cursor-pointer hover:shadow shadow-sm"
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdateUser;
