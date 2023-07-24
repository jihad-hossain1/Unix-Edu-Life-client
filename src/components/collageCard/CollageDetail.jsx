import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import EnrollModal from "../modal/EnrollModal";
import { ToastBar, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_BB_KEY;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const CollageDetail = () => {
  const { user } = useAuth();
  const collage = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "Science", label: "Science" },
    { value: "Commerce", label: "Commerce" },
    { value: "Others", label: "Others" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        if (dataResponse.success) {
          const imgUrl = dataResponse.data.display_url;
          const { name, email, number, address, birthDate, image } = data;
          const newItem = {
            image: imgUrl,
            name,
            email,
            number,
            address,
            birthDate,
            isCollage: collage,
            subject: selectedOption,
          };
          axios
            .post(`${import.meta.env.VITE_BASE_URL}/addEnroll`, newItem)
            .then((data) => {
              if (data.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
      });
  };
  console.log(collage);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 3000);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="my-20 mx-4">
      {/* <ToastBar></ToastBar> */}
      <div className="card grid grid-cols-1  bg-base-100 shadow">
        <figure>
          <img src={collage?.image} className="rounded-md" alt="collage" />
        </figure>
        <hr className="h-0.5 my-4 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-body">
            <h2 className="card-title">{collage?.name}</h2>
            <p>
              <span className="text-gray-600 bg-sky-50 px-1 rounded mr-2">
                Admission Fee:
              </span>{" "}
              <span className="ml-2 border border-neutral-200 text-neutral-500 rounded shadow-sm px-1">
                ${collage?.price}
              </span>
            </p>
            <p>
              <span className="text-gray-600 bg-sky-50 px-1 rounded mr-2">
                Admission Date:
              </span>{" "}
              <span className="ml-2 border border-neutral-200 text-neutral-500 rounded shadow-sm px-1">
                {collage?.admissionDate}
              </span>
            </p>
            <p>
              <span className="text-neutral-600 bg-sky-50 px-1 rounded mr-2">
                Admission Process:{" "}
              </span>
              {collage?.adProcess?.map((item, index) => (
                <ul key={index}>
                  <li className="list-disc ml-8">{item?.value}</li>
                </ul>
              )) || <span className="text-pink-400">No data found</span>}
            </p>
            <p>
              <span className="text-neutral-600 bg-sky-50 px-1 rounded mr-2 ">
                Event Details:{" "}
              </span>
              {collage?.event || (
                <span className="text-pink-400">No data found</span>
              )}
              <span className="text-green-500 ml-2">{collage?.eventDate}</span>{" "}
              at
              <span className="text-neutral-500 ml-2 uppercase">
                {collage?.eventLocation}
              </span>
            </p>
            <p className="">
              <span className="text-gray-600">Sport :</span>{" "}
              <span className="ml-2">
                {collage?.sport.map((item, index) => (
                  <div key={index} className="">
                    <ul className="pl-10">
                      <li>{item?.value}</li>
                    </ul>
                  </div>
                ))}
              </span>
            </p>
          </div>
          <div className="md:mt-6">
            <p>
              <span className="text-neutral-600 bg-sky-50 px-1 rounded mr-2">
                Collage Details:{" "}
              </span>
              {collage?.description || (
                <span className="text-pink-400">No data found</span>
              )}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <div className="text-center mt-5">
            <button
              onClick={() => handleBooking(collage)}
              className="w-full rounded-lg bg-sky-600 font-semibold text-white  px-3 py-2 hover:shadow-md hover:bg-sky-700"
            >
              <span onClick={user && showModal}>Book Now</span>
            </button>
            {/* modal components  */}
            <EnrollModal
              collage={collage}
              showModal={showModal}
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              confirmLoading={confirmLoading}
              handleCancel={handleCancel}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              register={register}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              options={options}
            ></EnrollModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageDetail;
