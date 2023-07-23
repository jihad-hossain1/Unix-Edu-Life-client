import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import LoginContainer from "./LoginContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/userApi";
const img_hosting_token = import.meta.env.VITE_BB_KEY;

const Register = () => {
  const { signInWithGoogle, createUser, updateUserProfile } = useAuth();
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
          saveUser(result.user);
          toast.success(`Login Successfull`);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
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
      .then((uploadRes) => {
        const photoUrl = uploadRes.data.display_url;
        if (uploadRes.success) {
          createUser(data.email, data.password)
            .then((result) => {
              updateUserProfile(data.name, photoUrl).then(() => {
                saveUser(result.user);
                navigate(from, { replace: true });
                reset();
                toast.success("Login Success");
              });
            })
            .catch((error) => {
              console.log(error.message);
              toast.error(`${error.message}`);
            });
        }
      });
  };
  return (
    <LoginContainer>
      <div className="px-10 md: mx-auto my-4">
        <Toaster />
        <h4 className="text-2xl font-bold ">Create an account </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="py-8">
          <div className="mb-7">
            <input
              type="text"
              placeholder="User Name"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="mb-7">
            <input
              type="email"
              placeholder="Email"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-7">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 18,
                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])/,
              })}
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
            />
            {errors.password && <span>This field is required</span>}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 text-sm">
                password must be 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 text-sm">
                password must be have one upper case one lower case one number
                one special characters
              </p>
            )}
          </div>
          <div className="mb-7">
            <input
              type="file"
              {...register("image", { required: true })}
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700"
            />
            {errors.image && <span>This field is required</span>}
          </div>
          <div className="text-center ">
            <input
              type="submit"
              value="Register"
              className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none   focus:ring-1 focus:ring-sky-500 rounded-md placeholder-gray-700 cursor-pointer"
            />
          </div>
        </form>
        <div className="text-center">
          <span>already have account ?</span>{" "}
          <Link className="text-sky-600 ml-2 hover:underline" to={`/login`}>
            Login here
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

export default Register;
