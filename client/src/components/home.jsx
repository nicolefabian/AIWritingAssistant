import React from "react";
import { FaPencilAlt, FaSpellCheck, FaSyncAlt } from "react-icons/fa";
import ai from "../images/ai.png";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Boost Your Writing Skills with AI Assistance
              </h2>
              <p className="text-xl mb-8">
                Harness the capabilities of artificial intelligence to refine your
                grammar, fix spelling mistakes, and enhance your writing style.
              </p>
              <Link
                to="/write"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
              >
                Get Started with Writing
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                style={{ width: "70%", height: "auto" }}
                src={ai}
                alt="AI Writing"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              Unlock the Full Potential of Your Writing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<FaPencilAlt className="text-6xl text-blue-500" />}
                title="AI-Powered Grammar Fixes"
                description="Get precise grammar improvements through context-aware AI suggestions, ensuring your writing is polished and correct."
              />
              <FeatureCard
                icon={<FaSpellCheck className="text-6xl text-green-500" />}
                title="Enhanced Spell Checking"
                description="Detect subtle spelling mistakes with an intelligent spell checker that takes into account the context of your words."
              />
              <FeatureCard
                icon={<FaSyncAlt className="text-6xl text-purple-500" />}
                title="Smart Sentence Rewriting"
                description="Reword your sentences for better clarity and effectiveness, adapting to the tone and style you're aiming for."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
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
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default home;
