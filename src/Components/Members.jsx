import { FaGithub, FaLinkedin } from "react-icons/fa";

const Members = () => {
  return (
    <div
      id="team"
      className="min-h-screen w-full flex flex-col items-center px-4 py-12 gap-12 text-white"
    >
      <h1 className="text-4xl font-bold text-center  text-green-300">
        Meet the Founders
      </h1>

      {/* Founder Cards */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Founder 1 */}
        <div className="border border-gray-700 rounded-2xl p-6 shadow-lg w-72 flex flex-col items-center">
          <img
            src="/founder1.jpeg" // Replace with actual image URL
            alt="Founder 1"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700"
          />
          <h2 className="text-xl font-semibold mb-2">Rahul Mishra</h2>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Cyber-Society-MSIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/rivian96/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="border border-gray-700 rounded-2xl p-6 shadow-lg w-72 flex flex-col items-center">
          <img
            src="founder2.jpeg" // Replace with actual image URL
            alt="Founder 2"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700"
          />
          <h2 className="text-xl font-semibold mb-2">Tuhin Mitra</h2>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Cyber-Society-MSIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/tuhin-mitra-017b68228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Team Photo Card */}
      <div className="border border-gray-700 rounded-2xl p-6 shadow-xl w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Our Amazing Team
        </h2>
        <img
          src="team.jpg" // Replace with actual image URL
          alt="Team Pic"
          className="w-full h-auto rounded-xl object-cover border border-gray-700"
        />
      </div>
    </div>
  );
};

export default Members;
