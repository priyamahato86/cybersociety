
import { FaGithub, FaLinkedin } from "react-icons/fa";

 const teamMembers = [
  {
    name: "Rahul Mishra",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFiYLXYEQrEkQ/profile-displayphoto-scale_400_400/B4EZhbyOLmHIAk-/0/1753886549510?e=1758758400&v=beta&t=quI8JPugZ0SMrG-8AnV3OpSTc0Ric08CkivaQSzg03U",
    github: "https://github.com/Cyber-Society-MSIT",
    linkedin: "https://www.linkedin.com/in/rivian96/",
    role: "Founder",
  },
  {
    name: "Tuhin Mitra",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQFI-OCvMauS_g/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1723291929579?e=1754226000&v=beta&t=ytwqgtCZsgMcXkURSXg7HFaLa2xRuR9uP4ykrivlbMY",
    github: "https://github.com/Cyber-Society-MSIT",
    linkedin: "https://www.linkedin.com/in/tuhin-mitra-017b68228/",
    role: "Co-Founder",
  },
  {
    name: "Chirag Sharma",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGnufFsL3vp6w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721666034397?e=1756339200&v=beta&t=622MyE3t_E_ZcY7sUn1OrYEdibbhfg5Bl4qmmuxP5r0",
    github: "https://github.com/chirag7759",
    linkedin: "https://www.linkedin.com/in/chirag-sharma-4bb862243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    role: "Administrator",
  },
  {
    name: "Sarvesh Sharma",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQGSSDYms3YhUg/profile-framedphoto-shrink_400_400/B4EZgeQLR5GcAc-/0/1752854213939?e=1754226000&v=beta&t=6yw5hNjVU-D5RI4eJL19U7fbA20kxyiB0yiWWByRPPI",
    github: "https://github.com/Synapse10",
    linkedin: "https://www.linkedin.com/in/sarvesh-sharma11",
    role: "Administrator",
  },
  {
    name: "Swapnayan Datta",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQG9geP3irzS6Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1733763192025?e=1754226000&v=beta&t=Nzt0mB6b5qJ3T_OCWwE62HKyPbIVmooJqcFk-Dq1Pe8",
    github: "https://github.com/Swapnayandatta",
    linkedin: "https://www.linkedin.com/in/swapnayan-datta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    role: "Administrator",
  },
  {
    name: "Somnath Maiti ",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFHK1jnB2y9MQ/profile-displayphoto-shrink_400_400/B56ZV2aKd1HsAg-/0/1741448325521?e=1756339200&v=beta&t=Yg2VLcwGjEfbJ9kWm72o3vsn8qAw2G4zA87VySdOcR0",
    github: "https://github.com/somnath-oss",
    linkedin: "https://www.linkedin.com/in/somnath-maiti/",
    role: "Administrator",
  },
  {
    name: "Indira Paul",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQGuJwVfi25vBA/profile-framedphoto-shrink_400_400/B4DZf6_ujFGsAc-/0/1752262699528?e=1754226000&v=beta&t=IwTncfclHHcc_0HMcZllLv9M-2bUYjTPbCsVswG63sU",
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
    image: "https://media.licdn.com/dms/image/v2/D5603AQHs3H9thm9D7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712632689126?e=1756339200&v=beta&t=ba9_T52YVXqiJ49rGdacMNpcVsWNbpHjO39hSaP2Mak",
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
    image: "https://media.licdn.com/dms/image/v2/D5635AQG8PdY7_-lXCA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1709210306279?e=1754226000&v=beta&t=tzotPRoVAhAKdPjtALMIFuuV-vGpXp1FxOCY0blbB-g",
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
