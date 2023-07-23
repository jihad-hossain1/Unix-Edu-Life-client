import useCollage from "../../hooks/useCollage";
import Container from "../Container/Container";

const CollageCardHome = () => {
  const [collages] = useCollage();
  console.log(collages);
  return (
    <Container>
      <div>
        <h4 className="">total collage: {collages?.length}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collages.map((collage) => (
            <div
              key={collage?._id}
              className="shadow-sm hover:shadow border-b border-neutral-200"
            >
              <img
                src={collage?.image}
                className="border border-sky-200 rounded-t-md"
                alt="collage photo"
              />
              <div className="px-3 py-2">
                <h4 className="text-xl font-semibold">{collage?.name}</h4>
                <p>
                  <span className="text-gray-600">Admission Date:</span>{" "}
                  <span className="ml-2">{collage?.admissionDate}</span>
                </p>
                <p>
                  <span className="text-gray-600">Research :</span>{" "}
                  <span className="ml-2">{collage?.research}</span>
                </p>
                <p>
                  <span className="text-gray-600">Sport :</span>{" "}
                  <span className="ml-2">
                    {collage?.sport.map((item, index) => (
                      <div className="">
                        <ul className="pl-10">
                          <li>{item?.value}</li>
                        </ul>
                      </div>
                    ))}
                  </span>
                </p>
              </div>
              <div className="text-center mt-2">
                <button className="w-full shadow-sm  hover:bg-sky-200 py-2 text-sky-700">
                  View more Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CollageCardHome;
