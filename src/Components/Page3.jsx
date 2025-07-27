import React from "react";

const specializedResources = [
  {
    name: "Pwn College",
    description: "Focus on binary exploitation and pwning.",
    link: "https://pwn.college",
  },
  {
    name: "PortSwigger Web Security Academy",
    description: "Learn about web vulnerabilities.",
    link: "https://portswigger.net/web-security",
  },
  {
    name: "CryptoHack",
    description: "Sharpen your cryptography skills.",
    link: "https://cryptohack.org",
  },
  {
    name: "Guyinatuxedo GitHub",
    description: "Learn Reverse engineering skills (see pinned).",
    link: "https://github.com/guyinatuxedo",
  },
];

const Page3 = () => {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10  text-green-300">
        Specialized Training
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {specializedResources.map((resource, index) => (
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

export default Page3;
