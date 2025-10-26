const blogs = [
    {
      title: "Building Scalable Automation Frameworks",
      description:
        "Learn how to design modular automation frameworks using Playwright, TestNG, and CI/CD pipelines.",
      date: "Oct 2025",
      link: "#",
    },
    {
      title: "From QA to Full-Stack Engineer",
      description:
        "My journey transitioning from software testing to full-stack development and DevOps.",
      date: "Sep 2025",
      link: "#",
    },
    {
      title: "Integrating WhatsApp Bots with Twilio & Flask",
      description:
        "A step-by-step guide to building automated WhatsApp communication using Python and Twilio.",
      date: "Aug 2025",
      link: "#",
    },
  ];
  
  export default function Blogs() {
    return (
      <section id="blogs" className="py-16 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">My Blogs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-left"
              >
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                <a
                  href={blog.link}
                  className="text-blue-600 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  