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
];

const Blog = () => {
  return (
    <div className="min-h-screen  text-white px-4 md:px-10 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Blogs <span className="text-2xl">📡</span>
      </h1>

      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#2a2a2a] transition-shadow shadow-md hover:shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-400 mb-3 text-sm">{blog.description}</p>
            <p className="text-gray-500 text-xs">
              {blog.date} • {blog.readTime} • {blog.words} • {blog.author}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;

