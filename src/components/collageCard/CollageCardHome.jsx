import Swal from "sweetalert2";
import useCollage from "../../hooks/useCollage";
import Container from "../Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CollageCardHome = () => {
  const { user } = useAuth();
  const [collages] = useCollage();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(collages);
  const handleLogin = (collage) => {
    if (user && user?.email) {
      navigate(`/collageDetail/${collage?._id}`);
    } else {
      Swal.fire({
        title: "please LogIn",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to, LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  };
  return (
    <Container>
      <div className="my-10 pt-10">
        <h4 className="font-bold text-3xl md:text-5xl text-center text-neutral-700">
          Top Ranked Collage of the Year
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          {collages.slice(0, 3).map((collage) => (
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

export default CollageCardHome;
