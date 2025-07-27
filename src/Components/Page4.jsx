import React from "react";

const advancedPlatforms = [
  {
    name: "Attack-Defense",
    description: "Realistic attack-defense scenarios.",
    link: "https://attackdefense.com",
  },
  {
    name: "Hacker101 CTF",
    description: "CTF challenges designed by HackerOne.",
    link: "https://ctf.hacker101.com",
  },
  {
    name: "Komodo Security CTF",
    description: "Application security-focused CTF.",
    link: "https://ctf.komodosec.com",
  },
];

const additionalResources = [
  {
    name: "Cybrary Virtual Labs",
    description: "Free and paid labs for hands-on practice.",
    link: "https://cybrary.it",
  },
  {
    name: "Hacksplaining",
    description: "Simple explanations of common vulnerabilities.",
    link: "https://hacksplaining.com/lessons",
  },
  {
    name: "OWASP WebGoat",
    description: "A deliberately vulnerable web app for learning.",
    link: "https://owasp.org/webgoat",
  },
];

const communities = [
  {
    name: "Reddit (r/netsec & r/CTF)",
    description: "Follow for updates and challenges.",
    link: "https://www.reddit.com/r/netsec/",
  },
  {
    name: "CTFTime",
    description: "Track global CTF events.",
    link: "https://ctftime.org",
  },
  {
    name: "Hack The Box Forums",
    description: "Discuss CTFs and hacking techniques.",
    link: "https://forum.hackthebox.com",
  },
];

const booksAndTutorials = [
  {
    name: "Penetration Testing by Georgia Weidman",
    description: "A hands-on intro to ethical hacking.",
    link: "#",
  },
  {
    name: "CTF Field Guide by Trail of Bits",
    description: "A great field guide for CTF beginners.",
    link: "#",
  },
  {
    name: "Open Security Training",
    description: "Free courses for cybersecurity topics.",
    link: "https://p.ost2.fyi/",
  },
  {
    name: "Hack The Box Academy",
    description: "Detailed courses for hacking skills.",
    link: "https://academy.hackthebox.com",
  },
  {
    name: "Hackers101",
    description: "Learn to Hack with free courses.",
    link: "https://Hackers101.com",
  },
];

const ResourceSection = ({ title, resources }) => (
  <div className="mb-14">
    <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {resources.map((resource, index) => (
        <div
          key={index}
          className="border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-green-400"
        >
          <h3 className="text-2xl font-semibold mb-2">{resource.name}</h3>
          <p className="text-gray-300 mb-4">{resource.description}</p>
          {resource.link !== "#" && (
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:underline"
            >
              Visit {resource.name}
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Page4 = () => {
  return (
    <div className="min-h-screen text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-14  text-green-300">
        Advanced Platforms & More
      </h1>

      <ResourceSection
        title="Advanced Platforms"
        resources={advancedPlatforms}
      />
      <ResourceSection
        title="Additional Resources"
        resources={additionalResources}
      />
      <ResourceSection title="Communities & Forums" resources={communities} />
      <ResourceSection
        title="Books & Tutorials"
        resources={booksAndTutorials}
      />
    </div>
  );
};

export default Page4;
