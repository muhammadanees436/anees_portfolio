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
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of automation frameworks and testing solutions I've built to improve software quality and testing efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="p-6">
                {/* Project icon and title */}
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>

                {/* Project description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
  