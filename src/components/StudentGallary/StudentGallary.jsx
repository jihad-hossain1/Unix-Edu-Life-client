import React, { useState } from "react";
import { Image } from "antd";
import Container from "../Container/Container";
const StudentGallary = () => {
  const [seeMore, setSeeMore] = useState();
  const galary = [
    {
      image: "https://i.ibb.co/dWLGTWG/gal-1.jpg",
    },
    {
      image: "https://i.ibb.co/Pgs33Mt/gal-2.jpg",
    },
    {
      image: "https://i.ibb.co/6yMTfMF/gal-3.jpg",
    },
    {
      image: "https://i.ibb.co/nfngn08/gal-4.jpg",
    },
    {
      image: "https://i.ibb.co/1ZB4Gtj/gal-5.jpg",
    },
    {
      image: "https://i.ibb.co/yNTBCJm/gal-6.jpg",
    },
    {
      image: "https://i.ibb.co/9GG1jqS/gal-7.jpg",
    },
    {
      image: "https://i.ibb.co/tcLrgkp/gal-8.jpg",
    },
    {
      image: "https://i.ibb.co/DbKJMZg/gal-9.jpg",
    },
    {
      image: "https://i.ibb.co/WKpbN98/gal-10.jpg",
    },
    {
      image: "https://i.ibb.co/MBtj6K8/gal-11.jpg",
    },
    {
      image: "https://i.ibb.co/VC26XNS/gal-12.jpg",
    },
    {
      image: "https://i.ibb.co/1ZMgBj2/gal-13.jpg",
    },
    {
      image: "https://i.ibb.co/m9N904w/gal-14.jpg",
    },
    {
      image: "https://i.ibb.co/Kbdjtcj/gal-15.jpg",
    },
    {
      image: "https://i.ibb.co/kDpwL0h/gal-16.jpg",
    },
    {
      image: "https://i.ibb.co/3mW2bHm/gal-17.jpg",
    },
  ];
  return (
    <Container>
      <h4 className="text-3xl md:text-5xl text-center font-bold text-gray-700 mb-10">
        Student Gallary
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {galary.slice(0, seeMore ? galary.length : 6).map((item, index) => (
          <div key={index}>
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <Image
                className="w-96 md:w-full rounded border border-sky-200 object-cover p-[2px]"
                src={item?.image}
              />
            </Image.PreviewGroup>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end my-4">
        {!seeMore && (
          <button
            onClick={setSeeMore}
            className="px-3 py-1 rounded-md border border-sky-600 hover:border-sky-600 hover:bg-sky-600 hover:font-semibold hover:text-white shadow-md"
          >
            See More
          </button>
        )}
      </div>
    </Container>
  );
};

export default StudentGallary;
