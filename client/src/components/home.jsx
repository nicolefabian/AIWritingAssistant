import React from "react";
import { FaPencilAlt, FaSpellCheck, FaSyncAlt } from "react-icons/fa";
import ai from "../images/aibot.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-white py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Boost Your Writing Skills with AI Assistance
              </h2>
              <p className="text-xl mb-8 text-black">
                Harness the capabilities of artificial intelligence to refine your
                grammar, fix spelling mistakes, and enhance your writing style.
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
                style={{ width: "90%", height: "auto" , marginLeft: "auto", marginRight: "auto"}}
                src={ai}
                alt="AI Writing"
                className="rounded-lg "
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-eggshell">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-delft-blue">
              Unlock the Full Potential of Your Writing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<FaPencilAlt className="text-6xl text-burnt-sienna" />}
                title="AI-Powered Grammar Fixes"
                description="Get precise grammar improvements through context-aware AI suggestions, ensuring your writing is polished and correct."
              />
              <FeatureCard
                icon={<FaSpellCheck className="text-6xl text-cambridge-blue" />}
                title="Enhanced Spell Checking"
                description="Detect subtle spelling mistakes with an intelligent spell checker that takes into account the context of your words."
              />
              <FeatureCard
                icon={<FaSyncAlt className="text-6xl text-delft-blue" />}
                title="Smart Sentence Rewriting"
                description="Reword your sentences for better clarity and effectiveness, adapting to the tone and style you're aiming for."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-delft-blue text-white py-8 text-center">
        <p>
          ©{new Date().getFullYear()} AI Writing Assistant
        </p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-delft-blue">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
