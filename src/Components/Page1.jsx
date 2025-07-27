import React from "react";

const resources = [
  {
    name: "PicoCTF",
    description: "Great for students and beginners.",
    link: "https://picoctf.com",
  },
  {
    name: "TryHackMe",
    description: "Interactive labs for various skill levels.",
    link: "https://tryhackme.com",
  },
  {
    name: "RootMe",
    description: "Practice with real vulnerabilities.",
    link: "https://www.root-me.org",
  },
  {
    name: "OverTheWire",
    description: "Classic wargames to build your foundational skills.",
    link: "https://overthewire.org",
  },
  {
    name: "Vulnhub",
    description: "Download vulnerable machines for offline practice.",
    link: "https://vulnhub.com",
  },
  {
    name: "Hack This Site",
    description: "Learn WebApp security and Exploitation.",
    link: "https://hackthissite.org",
  },
];

const Page1 = () => {
  return (
    <div className="min-h-screen  text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10  text-green-300">
        Beginner-Friendly Platforms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resources.map((resource, index) => (
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
              className="inline-block mt-auto text-blue-400 hover:underline"
            >
              Visit {resource.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
