
import { FaGithub, FaLinkedin } from "react-icons/fa";

 const teamMembers = [
  {
    name: "Rahul Mishra",
    image: "./rahul.png",
    github: "https://github.com/Cyber-Society-MSIT",
    linkedin: "https://www.linkedin.com/in/rivian96/",
    role: "Founder",
  },
  {
    name: "Tuhin Mitra",
    image: "./tuhin.png",
    github: "https://github.com/Cyber-Society-MSIT",
    linkedin: "https://www.linkedin.com/in/tuhin-mitra-017b68228/",
    role: "Co-Founder",
  },
  {
    name: "Chirag Sharma",
    image: "./chirag.png",
    github: "https://github.com/chirag7759",
    linkedin: "https://www.linkedin.com/in/chirag-sharma-4bb862243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    role: "Administrator",
  },
  {
    name: "Sarvesh Sharma",
    image: "./sarvesh.png",
    github: "https://github.com/Synapse10",
    linkedin: "https://www.linkedin.com/in/sarvesh-sharma11",
    role: "Administrator",
  },
  {
    name: "Swapnayan Datta",
    image: "https://avatars.githubusercontent.com/u/138855944?v=4",
    linkedin: "https://www.linkedin.com/in/swapnayan-datta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    role: "Administrator",
  },
  {
    name: "Somnath Maiti ",
    image: "./somnath.png",
    github: "https://github.com/somnath-oss",
    linkedin: "https://www.linkedin.com/in/somnath-maiti/",
    role: "Administrator",
  },
  {
    name: "Indira Paul",
    image: "./indira.png",
    github: "https://github.com/Airborne167-hacker",
    linkedin: "https://www.linkedin.com/in/indira-paul-750701319/",
    role: "Administrator",
  },
  {
    name: "Agami Protiher",
    image: "https://avatars.githubusercontent.com/u/140228887?v=4",
    github: "https://github.com/Agamiprotiher",
    linkedin: "https://www.linkedin.com/in/agami-protiher/",
    role: "Administrator",
  },
  {
    name: "Farha Mustafi",
    image: "./farha.png",
    github: "https://github.com/Farhaaaaaaa",
    linkedin: "https://www.linkedin.com/in/farha-mustafi-9a8250296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    role: "Administrator",
  },
  {
    name: "Priya Mahato",
    image: "https://avatars.githubusercontent.com/u/209283042?v=4",
    github: "https://github.com/priyamahato86",
    linkedin: "http://www.linkedin.com/in/priyamahato86",
    role: "Web Admin",
  },
  {
    name: "Punit Agarwal",
    image: "./punit.png",
    github: "https://github.com/your-github",
    linkedin: "https://www.linkedin.com/in/punit-agarwal-6a3552278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    role: "Management",
  },
  {
    name: "Soumyajit Roy",
    image: "/soumyajit.jpg",
    github: "https://github.com/Soumyajit-hub",
    linkedin: "https://linkedin.com/in/amit-verma",
    role: "Management",
  },
  // Add more members here
];

const Members = () => {
  return (
    <div
      id="team"
      className="min-h-screen w-full flex flex-col items-center px-4 py-12 gap-12 text-white"
    >
      <h1 className="text-4xl font-bold text-center text-green-300">
        Meet the Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-2xl p-6 shadow-lg w-72 flex flex-col items-center 
              transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700"
            />
            <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{member.role}</p>
            <div className="flex gap-4 mt-2">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="hover:text-gray-400 transition duration-200 hover:scale-110" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="hover:text-blue-400 transition duration-200 hover:scale-110" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
