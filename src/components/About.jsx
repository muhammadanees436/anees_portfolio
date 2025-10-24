export default function About() {
  const skills = [
    { name: 'API Testing', icon: '🔗', level: 'Expert' },
    { name: 'Web Automation', icon: '🤖', level: 'Expert' },
    { name: 'React Development', icon: '⚛️', level: 'Advanced' },
    { name: 'Test Frameworks', icon: '🧪', level: 'Expert' },
    { name: 'CI/CD Integration', icon: '🚀', level: 'Advanced' },
    { name: 'Performance Testing', icon: '⚡', level: 'Intermediate' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className="space-y-6">
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                I'm a Software Quality Assurance Engineer with <span className="font-semibold text-blue-600">4+ years of experience</span> 
                in API and Web Automation. I specialize in building robust testing frameworks and ensuring software quality through comprehensive automation strategies.
              </p>
              <p className="mb-4">
                My expertise spans across <span className="font-semibold text-purple-600">Playwright, Cypress, Selenium, and JMeter</span>, 
                with a passion for clean automation frameworks and modern web technologies.
              </p>
              <p>
                I believe in the power of automation to improve software quality and developer productivity, 
                and I'm always excited to work on challenging projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Skills grid */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                      skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  