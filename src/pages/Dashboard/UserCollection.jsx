// import { Face3Outlined } from "@mui/icons-material";
import { Dropdown, Space, FloatButton } from "antd";
// import useUsers from "../../Hooks/useUsers";
import { FaTrashCan, FaRegFutbol, FaBuffer } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import "./hover.css";
import { FcDataConfiguration } from "react-icons/fc";
// import UpdateUser from "../../components/UpdateUserByModal/UpdateUser";
import useUsers from "../../hooks/useUsers";
import UpdateUser from "../../components/UpdateUser/UpdateUser";

const UserCollection = () => {
  const [users, refetch] = useUsers();
  const [isShown, setIsShown] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const handleUserDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BASE_URL}/users/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleMakeAdmin = (item) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h4 className="text-xl font-semibold text-center">
        Total User: {users?.length || 0}
      </h4>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name & Photo</th>
              <th>Info</th>
              <th>Action</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                      <div className="text-sm opacity-50">
                        {item?.location || <p className="text-sm">Unknown</p>}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.address || <p className="text-sm">Unknown</p>}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item?.email}
                  </span>
                </td>
                <td>
                  <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className="hoverable-container"
                  >
                    <div className="">
                      <FcDataConfiguration className="text-3xl"></FcDataConfiguration>
                    </div>
                    {isShown && (
                      <div className=" options-container">
                        <button
                          onClick={() => handleUserDelete(item)}
                          className="pl-2 flex items-center gap-2 hover:text-pink-600 "
                        >
                          <FaTrashCan></FaTrashCan> Delete
                        </button>
                        <button
                          onClick={() => setModal2Open(true)}
                          className="pl-2 flex items-center gap-2 hover:text-pink-600"
                        >
                          <FaRegFutbol></FaRegFutbol> Update
                        </button>
                      </div>
                    )}
                    {/* modal component  */}
                    <UpdateUser
                      modal2Open={modal2Open}
                      setModal2Open={setModal2Open}
                      item={item}
                      refetch={refetch}
                    ></UpdateUser>
                    {/* modal component  */}
                  </div>
                </td>
                <th className="">
                  {item?.role === "admin" ? (
                    <p className="text-sm text-green-700 font-semibold">
                      Admin
                    </p>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(item)}
                      className="border px-1 rounded shadow-sm hover:shadow"
                    >
                      Make Admin
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCollection;
