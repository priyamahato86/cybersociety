import React from "react";

const intermediateResources = [
  {
    name: "Hack The Box",
    description: "Test your skills on active challenges.",
    link: "https://hackthebox.com",
  },
  {
    name: "Google CTF",
    description: "Participate in Google's annual CTF.",
    link: "https://capturetheflag.withgoogle.com",
  },
  {
    name: "CMD Challenge",
    description: "Test your bash and shell command skills.",
    link: "https://cmdchallenge.com",
  },
  {
    name: "PentesterLab",
    description: "Learn pentesting with hands-on exercises.",
    link: "https://pentesterlab.com",
  },
];

const Page2 = () => {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10  text-green-300">
        Intermediate-Level Platforms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {intermediateResources.map((resource, index) => (
          <div
            key={index}
            className="border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-green-400"
          >
            <h2 className="text-2xl font-semibold mb-2">{resource.name}</h2>
            <p className="text-gray-300 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:underline"
            >
              Visit {resource.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
