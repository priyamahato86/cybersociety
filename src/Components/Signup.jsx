import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { User, Mail, Lock, GraduationCap, Building, UserPlus } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    collegeName: "",
    yearOfStudy: "",
  });

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData.email, formData.password);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-md p-8 border border-green-400/30">
        <h2 className="text-4xl font-bold text-center mb-4">
          Join <span className="text-green-300">Cyber Society</span> 🕶️
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Create your account and start learning ethical hacking
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3 text-green-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-green-400" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <Building className="absolute left-3 top-3 text-green-400" size={20} />
            <input
              type="text"
              name="collegeName"
              placeholder="College Name"
              value={formData.collegeName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <GraduationCap className="absolute left-3 top-3 text-green-400" size={20} />
            <input
              type="text"
              name="yearOfStudy"
              placeholder="Year of Study (e.g., 2nd Year)"
              value={formData.yearOfStudy}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all shadow-[0_0_10px_#22c55e]"
          >
            <UserPlus size={18} /> Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already a member?{" "}
          <Link to="/login" className="text-green-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
