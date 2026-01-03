import { FaYoutube } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div id="footer">
      <h2 className="mt-20 text-green-300 text-left text-[25px] font-semibold">
        Resource Index
      </h2>
      <p className="text-justify text-[18px] mt-5">
        We use a lot of different resources and platforms. Here they are!
      </p>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-6 md:grid-cols-2 gap-8 px-5 text-center mt-5">
        {[
          {
            icon: <FaYoutube />,
            color: "text-red-600",
            label: "Lecture on YouTube",
            link: "https://www.youtube.com/@cybersociety88",
          },
          {
            icon: <IoLogoDiscord />,
            color: "text-indigo-600",
            label: "Chat on Discord",
            link: "https://discord.com/",
          },
          {
            icon: <FaGithub />,
            color: "text-gray-800",
            label: "Open source on GitHub",
            link: "https://github.com/Cyber-Society-MSIT",
          },
          {
            icon: <TbBrandLinkedinFilled />,
            color: "text-blue-600",
            label: "Connect on LinkedIn",
            link: "https://www.linkedin.com/company/cyber-society-msit/?viewAsMember=true",
          },
          {
            icon: <RiInstagramFill />,
            color: "text-pink-600",
            label: "Follow on Instagram",
            link: "https://www.instagram.com/cyber_.society/",
          },
          {
            icon: <HiMail />,
            color: "text-green-600",
            label: "Contact us via Email",
            link: "mailto:cybersociety88@gmail.com",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center text-9xl ${item.color} transition-transform transform hover:scale-110 hover:text-gray-400 cursor-pointer`}
          >
            {item.icon}
            <span className="text-base mt-2 font-[18px]">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full px-4 mt-40">
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2 text-center sm:text-left  w-full">
        <p className="w-full sm:w-auto">
          &copy; CyberSociety MSIT&apos;{new Date().getFullYear()}
        </p>
        <p className="w-full sm:w-auto">
          Made by Priya Mahato
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
