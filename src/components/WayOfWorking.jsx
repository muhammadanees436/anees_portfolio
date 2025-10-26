import { Lightbulb, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb size={32} />,
    title: "Understand & Plan",
    description:
      "Collaborate closely to understand your goals, define requirements, and plan architecture.",
  },
  {
    icon: <PenTool size={32} />,
    title: "Design & Prototype",
    description:
      "Create intuitive UI/UX mockups and system flows to visualize the end product.",
  },
  {
    icon: <Code size={32} />,
    title: "Develop & Automate",
    description:
      "Write clean, scalable code with automated tests for reliability and speed.",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Test & Optimize",
    description:
      "Perform end-to-end, performance, and security testing for a flawless experience.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Deploy & Maintain",
    description:
      "Deploy to production with CI/CD and offer post-launch support and updates.",
  },
];

export default function WayOfWorking() {
  return (
    <section id="process" className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">My Way of Working</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center text-blue-600 mb-3">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
