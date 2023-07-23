import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import LoginContainer from "./LoginContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(saveUser);

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    // console.log("clck");
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        if (result) {
          toast.success(`Login Successfull`);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        if (result) {
          navigate(from, { replace: true });
          reset();
          toast.success("Login Success");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error.message}`);
      });
  };

  return (
    <LoginContainer>
      <div className="px-10 md: mx-auto my-4">
        <Toaster />
        <h4 className="text-2xl font-bold ">LogIn into account </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="py-8">
          <div className="mb-7">
            <input
              type="email"
              placeholder="UserName or Email"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-7">
            <input
              type="password"
              placeholder="input password"
              {...register("password", { required: true })}
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="text-center ">
            <input
              type="submit"
              value="Login"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700 cursor-pointer"
            />
          </div>
        </form>
        <div className="text-center">
          <span>You have no account ?</span>{" "}
          <Link className="text-sky-600 ml-2 hover:underline" to={`/register`}>
            Create an account
          </Link>
        </div>
        <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      </div>
      <div className="flex gap-6">
        <div
          onClick={handleGoogleSignIn}
          className="cursor-pointer hover:shadow flex items-center p-1 rounded-2xl border border-neutral-300 w-2/3"
        >
          <FcGoogle className="text-3xl mr-2 "></FcGoogle>{" "}
          <button className="flex items-center">
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="cursor-pointer hover:shadow flex items-center p-1 rounded-2xl border border-neutral-300 w-2/3">
          <TfiFacebook className="text-3xl mr-2   text-blue-700"></TfiFacebook>{" "}
          <div className="flex items-center ">
            <h4>Continue with Facebook</h4>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
