import React from "react";
import { FaPencilAlt, FaMagic, FaRobot, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../images/aboutusicon.png";

const about = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-delftBlue">
          About AI Writing Platform
        </h1>

        <img
          style={{
            width: "40%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={banner}
          alt="AI Writing"
          className="rounded-lg "
        />
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 mt-12 border-2 border-solid border-cambridgeBlue/60">
          <p
            style={{ textAlign: "justify" }}
            className="text-xl text-gray-700 mb-6"
          >
            This AI Writing Platform is a project I built as part of my journey
            to learn and experiment with OpenAI's API. Through developing this
            platform, I explored the capabilities of artificial intelligence in
            enhancing writing by offering various features designed to assist
            users in improving their text.
          </p>
          <p style={{ textAlign: "justify" }} className="text-xl text-gray-700">
            This project allowed me to gain hands-on experience with integrating
            AI technologies, showcasing how AI can be used to refine workflows
            and support individuals in their writing process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;

{
  /* <h2 className="text-3xl font-semibold mb-6 text-center text-lightGrey">
<span className="bg-eggshell border-2 border-solid border-eggshell px-4 py-2 rounded-md">
  Core Features{" "}
</span>
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

<div className="bg-cambridgeDarkBlue text-white rounded-lg p-8 text-center">
<h2 className="text-3xl font-bold mb-4">
  Ready to Take Your Writing to the Next Level?
</h2>
<p className="text-xl mb-6">
  Join the growing community of users using our platform.
</p>
<Link
  to="/write"
  className="bg-white text-cambridgeDarkBlue px-8 py-3 rounded-full font-bold text-lg hover:bg-eggshell transition duration-300"
>
  Get Started Today
</Link>
</div> */
}

// const FeatureCard = ({ icon, title, description }) => (
//   <div className="bg-white shadow-lg rounded-lg p-6">
//     <div className="flex items-center mb-4">
//       <div className="text-3xl mr-4">{icon}</div>
//       <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//     </div>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );
