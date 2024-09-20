import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaRocket } from "react-icons/fa";
import loadingGif from "../images/loading.gif";
import loginIcon from "../images/loginIcon.png";

function LoginPage() {
  const { login, ready, authenticated } = usePrivy();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && authenticated) {
      navigate("/write");
    }
  }, [ready, authenticated, navigate]);

  if (!ready) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-3xl drop-shadow-xl grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl">
        
        {/* Left column with image */}
        <div className="flex items-center justify-center rounded-3xl drop-shadow-xl">
          <img
           style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
            src={loginIcon}
            alt="Login Icon"
            className="w-full h-auto max-w-md"
          />
        </div>

        {/* Right column with login content */}
        <div className="flex flex-col justify-center p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Welcome
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Use the platform to enhance your writing with AI.
          </p>

          <button
            onClick={login}
            className="w-full bg-cambridgeBlue text-white py-3 rounded-md hover:text-gray-600 hover:bg-eggshell border-2 border-solid border-cambridgeBlue transition duration-300 flex items-center justify-center mb-4"
          >
            <FaSignInAlt className="mr-2" />
            Login
          </button>

          <button
            onClick={login}
            className="w-full border-2 border-solid border-cambridgeBlue bg-white text-cambridgeBlue py-3 rounded-md hover:bg-eggshell hover:text-gray-600 transition duration-300 flex items-center justify-center"
          >
            <FaRocket className="mr-2" />
            Get Started
          </button>

          <p className="mt-6 text-sm text-gray-500">
            New user? Click 'Get Started' to create your
            account and begin your journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;