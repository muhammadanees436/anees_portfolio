import { Code, Server, Bot, TestTube, Workflow } from "lucide-react";

const services = [
  {
    icon: <Code size={32} />,
    title: "Full-Stack Development",
    description:
      "Building scalable web applications with React, Spring Boot, Node.js, and Flutter — from frontend to backend integration.",
  },
  {
    icon: <Server size={32} />,
    title: "API & System Design",
    description:
      "Designing secure REST & SOAP APIs with JWT/OAuth2 authentication and optimized database structures in SQL & MongoDB.",
  },
  {
    icon: <TestTube size={32} />,
    title: "Automation & Testing",
    description:
      "Expert in Playwright, Cypress, Selenium, and JMeter to automate testing across UI, API, and performance layers.",
  },
  {
    icon: <Workflow size={32} />,
    title: "DevOps & CI/CD",
    description:
      "Setting up CI/CD pipelines using GitHub Actions, Docker, and Jenkins for reliable and automated deployments.",
  },
  {
    icon: <Bot size={32} />,
    title: "AI & Chatbot Integration",
    description:
      "Integrating AI features and automation bots using OpenAI APIs, Twilio, and WhatsApp for smarter user interactions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">My Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
