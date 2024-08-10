import Header from "@/components/custom/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [password2, setPassword2] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="h-screen">
      <div className="h-full grid place-items-center">
        <div className="p-10 border-black border-4 bg-white  grid place-items-center shadow-lg rounded-lg">
          <h1 className="text-xl font-bold my-4 text-black">
            Developer Register
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setName(e.target.value)}
              className="login_form_input"
              type="text"
              placeholder="Name*"
              value={name}
            />
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="login_form_input"
              type="text"
              placeholder="Username*"
              value={username}
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="login_form_input"
              type="email"
              placeholder="Email*"
              value={email}
            />
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="login_form_input"
                type={showPass ? "text" : "password"}
                placeholder="Password*"
                value={password}
              />
              <span
                className="absolute top-1/4 right-2 cursor-pointer text-black"
                onClick={() => setShowPass(!showPass)}
              >
                <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
              </span>
            </div>
            <div className="relative">
              <input
                onChange={(e) => setPassword2(e.target.value)}
                className="login_form_input"
                type={showPass2 ? "text" : "password"}
                placeholder="Re-enter Password*"
                value={password2}
              />
              <span
                className="absolute top-1/4 right-2 cursor-pointer text-black"
                onClick={() => setShowPass2(!showPass2)}
              >
                <FontAwesomeIcon icon={showPass2 ? faEyeSlash : faEye} />
              </span>
            </div>
            <input
              onChange={(e) => setGithub(e.target.value)}
              className="login_form_input"
              type="text"
              placeholder="Github"
              value={name}
            />
            <input
              onChange={(e) => setLinkedin(e.target.value)}
              className="login_form_input"
              type="text"
              placeholder="Linkedin"
              value={linkedin}
            />
            <button className="bg-black text-white font-bold px-6 py-2">
              Register
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 roudn mt-2">
                {error}
              </div>
            )}

            <div className="text-sm mt-3 text-right text-black">
              Already have an account?{" "}
              <span className="underline">
                <a href="/auth/sign-in">Log in.</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
