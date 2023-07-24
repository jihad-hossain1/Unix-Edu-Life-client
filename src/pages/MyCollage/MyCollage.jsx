import React, { useEffect, useState } from "react";
import useEnroll from "../../hooks/useEnroll";
import Container from "../../components/Container/Container";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";

const MyCollage = () => {
  const [enrolls, refetch] = useEnroll();
  const { user } = useAuth();
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { userName, description, rating } = data;
    const newItem = {
      userName,
      description,
      image: user?.photoURL,
      rating: parseFloat(rating),
    };
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/review`, newItem)
      .then((data) => {
        if (data.data.insertedId) {
          refetch();
          reset();
          toast.success(`${user?.displayName} Thank's for Feedback`);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <div className="my-14">
        <Toaster />
        <h4 className="text-3xl md:text-5xl mb-10 font-bold text-neutral-500 text-center">
          {" "}
          Enrolled Collage
        </h4>
        <div>
          {enrolls.map((enroll) => (
            <div
              key={enroll._id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <img
                src={enroll?.isCollage?.image}
                className=" object-cover rounded-md"
                alt=""
              />
              <div>
                <h4 className="text-xl font-semibold">
                  {enroll?.isCollage?.name}
                </h4>
                <p className="text-sm">{enroll?.isCollage?.description}</p>
                <div className="py-6">
                  <h4 className="text-xl font-semibold text-center mb-4">
                    Give a Feedback
                  </h4>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-[300px] mx-auto"
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        required
                        readOnly
                        defaultValue={user?.displayName}
                        placeholder="Your Name"
                        className="border border-neutral-300 w-full px-2 h-10"
                        {...register("userName", { required: true })}
                      />
                    </div>
                    <div className="flex space-x-2 mb-3">
                      <Rate character={({ index }) => customIcons[index + 1]} />
                      <input
                        type="number"
                        required
                        placeholder="Plaese a Rate !"
                        className="border border-neutral-300 w-full px-2 h-10"
                        {...register("rating", {
                          required: true,
                          maxLength: 3,
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        placeholder="Write a comment..."
                        {...register("description", {
                          required: true,
                          maxLength: 1000,
                        })}
                        id="description"
                        className="border border-neutral-300 w-full px-2 "
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="submit"
                        value="Submit"
                        className="border border-neutral-300 w-full px-2 h-10 cursor-pointer bg-sky-100 hover:bg-sky-200 shadow-sm hover:shadow"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MyCollage;
