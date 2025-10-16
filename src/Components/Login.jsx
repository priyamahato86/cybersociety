import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-md p-8 border border-green-400/30">
        <h2 className="text-4xl font-bold text-center mb-4">
          Welcome Back <span className="text-green-300">Hacker</span> 👾
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Login to access Cyber Society resources
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-green-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all shadow-[0_0_10px_#22c55e]"
          >
            <LogIn size={18} /> Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 py-2 border border-green-500 rounded-lg hover:bg-green-400/10 transition-all"
        >
          Login with Google
        </button>

        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-300 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
