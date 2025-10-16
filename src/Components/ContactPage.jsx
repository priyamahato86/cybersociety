
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Shield,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("⚠️ Something went wrong! Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-black">
      <div className="w-full max-w-xl bg-gray-900/60 border border-green-600/40 rounded-2xl shadow-[0_0_25px_rgba(0,255,0,0.2)] p-8 backdrop-blur-lg relative">
        {/* Glowing Ring Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-400/10 via-transparent to-green-600/10 blur-2xl -z-10" />

        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-800 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)] mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Contact Cyber Society
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Have a question or idea? Let’s talk — we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative group">
            <User className="absolute top-3 left-4 text-gray-500 group-focus-within:text-green-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-green-600/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition duration-200"
            />
          </div>

          {/* Email Field */}
          <div className="relative group">
            <Mail className="absolute top-3 left-4 text-gray-500 group-focus-within:text-green-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-green-600/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition duration-200"
            />
          </div>

          {/* Message Field */}
          <div className="relative group">
            <MessageSquare className="absolute top-3 left-4 text-gray-500 group-focus-within:text-green-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-green-600/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-green-700/30 text-center text-gray-500 text-sm">
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-green-400" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Secure Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
