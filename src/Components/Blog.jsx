import { BookOpen, CalendarDays, Clock, User } from "lucide-react";

const blogs = [
  {
    title: "The Stack alignment problem",
    description:
      "While learning about ret2libc exploitation, I encountered a stack alignment issue that initially confused me. After spending some time debugging, I finally understood why we add that extra ret instruct for the solution...",
    date: "June 10, 2025",
    readTime: "7 min",
    words: "1425 words",
    author: "Rahul Mishra",
    link: "https://rivian96.github.io/blogs/stack-allignment-problem/",
  },
  {
    title: "Analysing Brbbot",
    description:
      "In the previous article we unpacked the sample using various methods. In this post we will do static and dynamic analysis on the given sample. Static analysis The sample communicates over the internet, possibly...",
    date: "May 10, 2025",
    readTime: "5 min",
    words: "935 words",
    author: "Rahul Mishra",
    link: "https://rivian96.github.io/blogs/brbbot-analysis/",
  },
  {
    title: "Return to mprotect (defeating NX)",
    description:
      "Hello everyone! I've been exploring binary exploitation and found Return-Oriented Programming (ROP) really fascinating. In this post, I’ll share what I’ve learned so far. Since I’m still learning, if you spot any...",
    date: "May 10, 2025",
    readTime: "7 min",
    words: "1392 words",
    author: "Rahul Mishra",
    link: "https://rivian96.github.io/blogs/return-to-mprotect/",
  },
  {
    title: "Unpacking Malware",
    description:
      "In this post, we dive deep into unpacking malware binaries. We'll go through common packing techniques, how to identify them, and how to unpack using tools and techniques in both static and dynamic analysis...",
    date: "May 5, 2025",
    readTime: "6 min",
    words: "1120 words",
    author: "Rahul Mishra",
    link: "https://rivian96.github.io/blogs/unpacking-malware/",
  },
  {
    title: "Reverse Engineering",
    description:
      "In this post, we dive deep into the fundamentals of reverse engineering. We'll walk through common binary structures, how to identify program behavior, and how to analyze code using tools and techniques across both static and dynamic approaches...",
    date: "Aug 15, 2025",
    readTime: "9 min",
    words: "1002 words",
    author: "Rahul Mishra",
    link: "https://github.com/Cyber-Society-MSIT/Blogs/blob/main/Reverse-Engineering/Reverse%20Engineering_%20What%20to%20Know%20First.md",
  },
  {
    title: "Process-Explorer",
    description:
      "In this post, we dive deep into using Process Explorer for system inspection. We'll walk through common process behaviors, how to identify suspicious activity, and how to analyze runtime details using its powerful monitoring and visualization features...",
    date: "Dec 9, 2025",
    readTime: "12 min",
    words: "1110 words",
    author: "Rahul Mishra",
    link: "https://github.com/Cyber-Society-MSIT/Blogs/blob/main/Windows-Internals/Process-Explorer/Process%20Explorer.md",
  },
  {
    title: "Task-Manager",
    description:
      "In this post, we dive deep into understanding Windows Task Manager. We'll walk through common process metrics, how to identify system bottlenecks, and how to analyze resource usage using its built-in monitoring tools...",
    date: "Dec 9, 2025",
    readTime: "11 min",
    words: "1120 words",
    author: "Rahul Mishra",
    link: "https://github.com/Cyber-Society-MSIT/Blogs/blob/main/Windows-Internals/Task-manager/Task%20Manager.md",
  },
  {
    title: "Threads",
    description:
      "In this post, we dive deep into Windows internals and explore how threads work. We'll walk through common thread operations, how to identify thread activity, and how to analyze their behavior using tools and techniques across both user-mode and kernel-mode analysis...",
    date: "Dec 10, 2025",
    readTime: "10 min",
    words: "1110 words",
    author: "Rahul Mishra",
    link: "https://github.com/Cyber-Society-MSIT/Blogs/blob/main/Windows-Internals/threads/Threads.md",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-16">
      {/* Header */}
      <div className="text-center mb-12 px-2 overflow-visible">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,197,94,0.35)] leading-tight tracking-wide">
          Cyber Blogs
        </h1>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto px-3">
          Dive deep into exploit analysis, malware reverse engineering, and the
          art of hacking securely.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-b from-gray-900/70 to-black border border-gray-800 hover:border-green-500/60 rounded-2xl p-6 pb-12 shadow-[0_0_10px_rgba(0,255,0,0.05)] hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all duration-300 overflow-hidden"
          >
            {/* Subtle Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-green-500 blur-2xl transition-all duration-500"></div>

            {/* Icon */}
            <div className="flex items-center mb-4 space-x-3">
              <BookOpen className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {blog.description}
            </p>

            {/* Blog Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-auto">
              <div className="flex items-center space-x-1">
                <CalendarDays className="w-4 h-4 text-green-400" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-green-400" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4 text-green-400" />
                <span>{blog.author}</span>
              </div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 text-green-400 transition-all duration-300">
              <span className="text-sm font-semibold">Read →</span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Quote */}
      <div className="text-center mt-16 text-gray-500 text-sm italic">
        “Stay curious. Stay ethical. Keep exploring the unseen layers of
        cybersecurity.”
      </div>
    </div>
  );
};

export default Blog;
