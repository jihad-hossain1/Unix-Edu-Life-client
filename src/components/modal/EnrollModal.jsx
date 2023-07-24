import { Modal } from "antd";
import React from "react";
import useAuth from "../../hooks/useAuth";
import Select from "react-select";

const EnrollModal = ({
  handleCancel,
  collage,
  handleOk,
  isModalOpen,
  confirmLoading,
  handleSubmit,
  register,
  onSubmit,
  selectedOption,
  setSelectedOption,
  options,
}) => {
  const { user } = useAuth();
  return (
    <div>
      <Modal
        title={collage?.name}
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="" className="font-semibold">
              Your Full Name
            </label>
            <input
              required
              type="text"
              {...register("name")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Your Email
            </label>
            <input
              required
              defaultValue={user?.email}
              readOnly
              type="email"
              {...register("email")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Your Phone Number
            </label>
            <input
              required
              type="text"
              {...register("number")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Your Address
            </label>
            <input
              required
              type="text"
              {...register("address")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Date of Birth
            </label>
            <input
              required
              type="date"
              {...register("birthDate")}
              className="border w-full px-3 py-4"
            />
          </div>
          {/* envent  */}

          {/* research history */}

          {/* Subject */}
          <div>
            <label htmlFor="" className="font-semibold">
              Select a Subject
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>

          <div>
            <input
              required
              type="file"
              className="border w-full px-3 py-14 rounded-xl"
              {...register("image")}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="text-white font-semibold border cursor-pointer  w-full px-3 py-4 mx-auto rounded-md bg-sky-700  hover:shadow-md shadow"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EnrollModal;
