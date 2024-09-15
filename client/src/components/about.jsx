import React from "react";
import { FaPencilAlt, FaMagic, FaRobot, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          About Our AI Writing Platform
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <p className="text-xl text-gray-700 mb-6">
            Our AI Writing Platform is a state-of-the-art tool developed to revolutionize your writing process. By harnessing the power of artificial intelligence, we provide a wide range of features that improve the quality of your writing, increase your efficiency, and inspire your creativity.
          </p>
          <p className="text-xl text-gray-700">
            No matter if you're a student, a professional writer, or someone simply aiming to enhance their writing skills, our AI-based tools are designed to guide you toward improvement every step of the way.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Core Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            icon={<FaPencilAlt className="text-blue-500" />}
            title="Grammar Enhancements"
            description="Our AI-driven algorithms identify and rectify grammatical mistakes, helping you achieve polished and professional writing."
          />
          <FeatureCard
            icon={<FaMagic className="text-purple-500" />}
            title="Spelling Assistance"
            description="Our comprehensive spell-checker detects misspellings and suggests accurate corrections, preserving the quality of your text."
          />
          <FeatureCard
            icon={<FaRobot className="text-green-500" />}
            title="Smart Rephrasing"
            description="Receive intelligent rephrasing suggestions to enrich your writing, making it clearer and more impactful."
          />
          <FeatureCard
            icon={<FaChartLine className="text-red-500" />}
            title="Writing Performance Insights"
            description="Track your writing style and progress over time with our in-depth analytics, helping you refine your craft."
          />
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Your Writing to the Next Level?
          </h2>
          <p className="text-xl mb-6">
            Join the growing community of users who have transformed their writing with our AI Writing Platform.
          </p>
          <Link
            to="/write"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default about;
