import Header from "@/components/custom/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="h-screen">
      <div className="h-full grid place-items-center">
        <div className="p-10 border-black border-4 bg-white grid place-items-center shadow-lg rounded-lg">
          <h1 className="text-xl font-bold my-4 text-black">Developer Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="login_form_input"
              type="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="login_form_input"
                type={showPass ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="absolute top-1/4 right-2 cursor-pointer text-black"
                onClick={() => setShowPass(!showPass)}
              >
                <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
              </span>
            </div>
            <button className="bg-black text-white font-bold px-6 py-2">
              Login
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 roudn mt-2">
                {error}
              </div>
            )}

            <div className="text-sm mt-3 text-right text-black">
              Don't have an account?{" "}
              <span className="underline">
                <a href="/auth/sign-up">Register.</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
