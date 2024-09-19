import React from "react";
import { FaPencilAlt, FaSpellCheck, FaSyncAlt } from "react-icons/fa";
import ai from "../images/aibot.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className=".content flex-grow">
        {/* Hero Section */}
        <section className="text-white py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-lightGrey">
                Boost Your Writing Skills with AI Assistance
              </h2>
              <p className="text-xl mb-8 text-lightGrey">
                Harness the capabilities of artificial intelligence to refine
                your grammar, fix spelling mistakes, and enhance your writing
                style.
              </p>
              <Link
                to="/write"
                className="bg-cambridgeBlue text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-cambridgeDarkBlue hover:border-2 hover:border-solid hover:border-cambridgeBlue transition duration-300"
              >
                Get Started with Writing
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                style={{
                  width: "60%",
                  height: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={ai}
                alt="AI Writing"
                className="rounded-lg "
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            {/* Centering the Services heading and description */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-eggshell border-2 border-solid border-eggshell px-4 py-2 rounded-md">
                Services
              </span>
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto leading-snug">
              This site offers a range of services to help you improve your
              writing. These services include:
            </p>

            {/* Feature Cards in grid with background color */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 bg-cambridgeLightBlue p-8 rounded-3xl">
              <div className="text-center">
                <FeatureCard
                  icon={<FaPencilAlt className="text-6xl mx-auto" />}
                  title="AI-Powered Grammar Fixes"
                  description={
                    <p style={{ textAlign: "justify" }}>
                      Get grammar corrections with AI-driven suggestions that
                      consider context, ensuring your writing is clear.
                    </p>
                  }
                />
              </div>
              <div className="text-center">
                <FeatureCard
                  icon={
                    <FaSpellCheck className="text-6xl text-cambridge-blue mx-auto" />
                  }
                  title="Enhanced Spell Checking"
                  description={
                    <p style={{ textAlign: "justify" }}>
                      Identify subtle spelling errors with a smart spell checker
                      that understands the context of your writing
                    </p>
                  }
                />
              </div>
              <div className="text-center">
                <FeatureCard
                  icon={
                    <FaSyncAlt className="text-6xl text-delft-blue mx-auto" />
                  }
                  title="Smart Sentence Rewriting"
                  description={
                    <p style={{ textAlign: "justify" }}>
                      Refine your sentences for enhanced clarity and impact,
                      perfectly tailored to match your desired tone and style.
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </section>
 
      </main>
    
      <footer className="bg-cambridgeDarkBlue text-white py-4 text-center">
        <p>© {new Date().getFullYear()} AI Writing Assistant</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="border-2 border-solid border-cambridgeBlue/20 bg-white p-8 rounded-2xl shadow-lg text-center">
    <div className="mb-6 ">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-delft-blue">{title}</h3>
    <p className="text-gray-600 ">{description}</p>
  </div>
);

export default Home;
