import { useRef } from "react";

const projects = [
  { 
    name: "API Automation Framework", 
    desc: "Comprehensive REST API testing framework built with Rest Assured and TestNG, featuring parallel execution and detailed reporting.",
    tech: ["Java", "Rest Assured", "TestNG", "Maven"],
    icon: "🔗",
    github: "#",
    demo: "#"
  },
  { 
    name: "Playwright Framework", 
    desc: "End-to-end testing framework with Playwright, featuring cross-browser testing, visual regression testing, and Allure reports.",
    tech: ["TypeScript", "Playwright", "Allure", "CI/CD"],
    icon: "🎭",
    github: "#",
    demo: "#"
  },
  { 
    name: "Cypress Automation", 
    desc: "Modern web application testing with Cypress, covering UI automation, API integration testing, and custom commands.",
    tech: ["JavaScript", "Cypress", "API Testing", "Custom Commands"],
    icon: "⚡",
    github: "#",
    demo: "#"
  },
  { 
    name: "Performance Testing Suite", 
    desc: "Load testing framework using JMeter with distributed testing capabilities and comprehensive performance metrics.",
    tech: ["JMeter", "Docker", "Grafana", "InfluxDB"],
    icon: "📊",
    github: "#",
    demo: "#"
  },
  { 
    name: "Selenium Grid Setup", 
    desc: "Scalable Selenium Grid infrastructure with Docker containers for parallel test execution across multiple browsers.",
    tech: ["Selenium", "Docker", "Kubernetes", "Jenkins"],
    icon: "🕸️",
    github: "#",
    demo: "#"
  },
  { 
    name: "Test Data Management", 
    desc: "Dynamic test data generation and management system with database integration and API mocking capabilities.",
    tech: ["Python", "Faker", "PostgreSQL", "Mockito"],
    icon: "🗄️",
    github: "#",
    demo: "#"
  },
  // 👇 New Full Stack + Dev Projects
  {
    name: "Full Stack E-Commerce",
    desc: "MERN-based e-commerce platform with JWT authentication, admin dashboard, and Stripe payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "🛒",
    github: "#",
    demo: "#"
  },
  {
    name: "Flutter Quiz App",
    desc: "Cross-platform mobile quiz app built in Flutter, backed by a Spring Boot API with MongoDB integration.",
    tech: ["Flutter", "Spring Boot", "MongoDB"],
    icon: "📱",
    github: "#",
    demo: "#"
  },
  {
    name: ".NET Task Manager",
    desc: "Web-based project and task manager built using ASP.NET Core and SQL Server with authentication and roles.",
    tech: [".NET", "C#", "SQL Server", "Entity Framework"],
    icon: "🧩",
    github: "#",
    demo: "#"
  },
  {
    name: "AI Chat Assistant",
    desc: "Personalized AI assistant built with Python and OpenAI API, integrated into a web dashboard using Flask.",
    tech: ["Python", "Flask", "OpenAI", "JavaScript"],
    icon: "🤖",
    github: "#",
    demo: "#"
  },
  {
    name: "Portfolio Website",
    desc: "Responsive personal portfolio website built with React, TailwindCSS, and EmailJS integration for contact form.",
    tech: ["React", "TailwindCSS", "EmailJS"],
    icon: "🌐",
    github: "#",
    demo: "#"
  },
];

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 1100; // Adjust based on card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of frameworks and full-stack projects I’ve built for automation, performance, and scalable solutions.
          </p>
        </div>

        {/* Scrollable container */}
        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10"
          >
            ▶
          </button>

          {/* Project Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-12 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden snap-center"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg text-center text-xs hover:bg-gray-900 transition"
                    >
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 border-2 border-blue-600 text-blue-600 px-3 py-2 rounded-lg text-center text-xs hover:bg-blue-600 hover:text-white transition"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
