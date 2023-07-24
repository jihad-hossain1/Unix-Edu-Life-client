import React from "react";
import Container from "../../components/Container/Container";
import useCollage from "../../hooks/useCollage";
import { Link } from "react-router-dom";

const Collage = () => {
  const [collages] = useCollage();
  console.log(collages);
  return (
    <Container>
      <div className="py-6">
        <h4 className="text-3xl text-center text-gray-700 md:text-5xl font-bold mb-12">
          Total <span className="font-extralight">{collages?.length}</span>{" "}
          Collages
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          {collages.map((collage) => (
            <div
              key={collage?._id}
              className="shadow-sm hover:shadow border-b border-neutral-200 flex flex-col relative"
            >
              <img
                src={collage?.image}
                className="border border-sky-200 rounded-t-md w-full"
                alt="collage photo"
              />
              <div className="px-3 py-2">
                <h4 className="text-xl font-semibold">{collage?.name}</h4>
                <p>
                  <span className="text-gray-600">Admission Date:</span>{" "}
                  <span className="ml-2 bg-sky-50 text-neutral-500 rounded shadow-sm px-1">
                    {collage?.admissionDate}
                  </span>
                </p>
                <p>
                  <span className="text-gray-600">Research :</span>{" "}
                  <span className="ml-2">{collage?.research}</span>
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
              <Link
                to={`/collageDetail/${collage?._id}`}
                className="text-center absolute bottom-0 right-0"
              >
                <button className="w-full shadow-sm hover:shadow bg-sky-100  hover:bg-sky-200 py-[2px] rounded-sm text-sky-900  px-1 hover:rounded-md">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Collage;
