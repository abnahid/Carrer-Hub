/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthProvider";

const Register = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const { createUser, updateUserProfile, setUser, googleLogin } =
    useContext(AuthContext);

  const [validations, setValidations] = useState({
    lower: false,
    upper: false,
    length: false,
  });

  const handleChange = (value) => {
    const rules = {
      lower: /[a-z]/,
      upper: /[A-Z]/,
      length: /.{8,}/,
    };

    setValidations({
      lower: rules.lower.test(value),
      upper: rules.upper.test(value),
      length: rules.length.test(value),
    });
  };

  const handelGoogle = () => {
    googleLogin().then((result) => {
      navigate(location?.state?.from || "/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (name.length < 5) {
      setError({ ...error, name: "Name should be more than 5 characters" });
      return;
    }

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    if (!validations.lower || !validations.upper || !validations.length) {
      toast.error("Password does not meet complexity requirements");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User created successfully!");
        setUser(user);

        return updateUserProfile({
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .then(() => {
        navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Error: ${err.message}`);
      });
  };

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          {/* Sign-in Form */}
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Sign up
            </h2>
            <div>
              <a
                onClick={handelGoogle}
                className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <div className="px-4 py-3">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                  Sign up with Google
                </h1>
              </a>

              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a
                  href="#"
                  className="text-xs text-center text-gray-500 uppercase"
                >
                  or Sign up with email
                </a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>
            </div>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  User name
                </label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#7E90FE]"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  {error.name && (
                    <label className="label text-sm text-red-500">
                      {error.name}
                    </label>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-gray-800 text-sm mb-2 block">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoUrl"
                  className="w-full pr-10 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#7E90FE]"
                  placeholder="Enter photo URL"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full pr-10 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#7E90FE]"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={type}
                    name="password"
                    className="w-full pr-10 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#7E90FE]"
                    placeholder="Enter your password"
                    onChange={(e) => handleChange(e.target.value)}
                    required
                  />
                  <span
                    className="text-xl w-4  absolute right-4 top-6 transform -translate-y-1/2 cursor-pointer text-gray-300"
                    onClick={() =>
                      setType(type === "password" ? "text" : "password")
                    }
                  >
                    {type === "password" ? <IoEyeSharp /> : <FaEyeSlash />}
                  </span>
                  <div className="text-sm mt-2">
                    <p
                      className={
                        validations.lower ? "text-green-500" : "text-red-500"
                      }
                    >
                      Contains a lowercase letter
                    </p>
                    <p
                      className={
                        validations.upper ? "text-green-500" : "text-red-500"
                      }
                    >
                      Contains an uppercase letter
                    </p>

                    <p
                      className={
                        validations.length ? "text-green-500" : "text-red-500"
                      }
                    >
                      At least 6 characters long
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  required
                  className="h-4 w-4 shrink-0 text-[#7E90FE] focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  Accept{" "}
                  <a href="#" className="text-neutral-500 font-semibold">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Sign-in Button */}
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  animate-gradient focus:outline-none"
                >
                  Sign up
                </button>
              </div>

              {/* Register Link */}
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Already Have An Account?{" "}
                <Link
                  to="/login"
                  className="text-[#7E90FE] hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
