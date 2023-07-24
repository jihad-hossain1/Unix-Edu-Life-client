import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import CreatableSelect from "react-select/creatable";

const img_hosting_token = import.meta.env.VITE_BB_KEY;

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
const AddItem = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        if (dataResponse.success) {
          const imgUrl = dataResponse.data.display_url;
          console.log("photo uploaded url", imgUrl);
          // console.log(imgUrl);
          const {
            name,
            admissionDate,
            event,
            eventLocation,
            researchAuthor,
            eventDate,
            research,
            researchDate,

            price,
            image,
            description,
          } = data;
          const newItem = {
            name,
            admissionDate,
            image: imgUrl,
            event,
            description,
            price: parseFloat(price),
            eventLocation,
            researchAuthor,
            eventDate,
            research,
            researchDate,
            sport: selectedOption,
            adProcess: selectedOption2,
          };
          console.log(newItem);
          axios
            .post(`${import.meta.env.VITE_BASE_URL}/addCollage`, newItem)
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
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto xl:px-44 md:px-10 sm:px-2 px-4 ">
        <h4 className="text-center font-bold text-4xl mb-5 text-gray-600">
          Add Collage Section
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="" className="font-semibold">
              Collage Name
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
              Admission Date
            </label>
            <input
              required
              type="date"
              {...register("admissionDate")}
              className="border w-full px-3 py-4"
            />
          </div>
          {/* envent  */}
          <div className="flex space-x-2">
            <div>
              <label htmlFor="" className="font-semibold">
                Event
              </label>
              <input
                required
                type="text"
                {...register("event")}
                className="border w-full px-3 py-4"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold">
                Event location
              </label>
              <input
                required
                type="text"
                {...register("eventLocation")}
                className="border w-full px-3 py-4"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold">
                Event Date
              </label>
              <input
                required
                type="date"
                {...register("eventDate")}
                className="border w-full px-3 py-4"
              />
            </div>
          </div>
          {/* research history */}
          <div className="flex space-x-2">
            <div>
              <label htmlFor="" className="font-semibold">
                Research Name
              </label>
              <input
                required
                type="text"
                {...register("research")}
                className="border w-full px-3 py-4"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold">
                Research Author
              </label>
              <input
                required
                type="text"
                {...register("researchAuthor")}
                className="border w-full px-3 py-4"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold">
                Research Year
              </label>
              <input
                required
                type="date"
                {...register("researchDate")}
                className="border w-full px-3 py-4"
              />
            </div>
          </div>
          {/* sports */}
          <div>
            {/* <Select
            isMulti
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          /> */}
            <label htmlFor="" className="font-semibold">
              Sport
            </label>
            <CreatableSelect
              isMulti
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              // options={options}
            />
          </div>
          {/* Admission process */}
          <div>
            {/* <Select
            isMulti
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          /> */}
            <label htmlFor="" className="font-semibold">
              Admission Process
            </label>
            <CreatableSelect
              isMulti
              defaultValue={selectedOption2}
              onChange={setSelectedOption2}
              // options={options}
            />
          </div>
          {/* admission fee  */}
          <div>
            <label htmlFor="" className="font-semibold">
              Admission Fee
            </label>
            <input
              required
              type="text"
              {...register("price")}
              className="border w-full px-3 py-4"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Description
            </label>
            <input
              required
              type="text"
              {...register("description")}
              className="border w-full px-3 py-4"
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
              value="Add Collage"
              className="text-white font-semibold border cursor-pointer  w-full px-3 py-4 mx-auto rounded-md bg-sky-700  hover:shadow-md shadow"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
