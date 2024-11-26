"use client";

import { Check } from "lucide-react";

type Solution = {
  title: string;
  subtitle: string;
  description: string;
};

const solutions: Solution[] = [
  {
    title: "Tailored Software",
    subtitle: "Built Just for You",
    description:
      "Custom Solutions, Maximum Impact. When you work with us, you don't get cookie-cutter tools—you get software and AI solutions designed specifically for your needs.",
  },
  {
    title: "AI Expertise",
    subtitle: "Stay Ahead of the Curve",
    description:
      "Proven Expertise, Industry Insights. With experience working alongside industry leaders in AI and tech, we bring the latest innovations and best practices to your project.",
  },
  {
    title: "Effortless Scaling",
    subtitle: "Cost-Effective Growth",
    description:
      "Own It, Scale It, Control Costs. Our solutions are designed to grow with your business—seamlessly and affordably.",
  },
];

const TransformBusiness = () => {
  return (
    <section
      id="whatwedo"
      className="bg-background py-24 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Why Work With Us?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The right tools. The right expertise. The right results.
          </p>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="bg-navy-800/50 rounded-xl p-8 border border-cyber-blue/20 
                backdrop-blur-sm group hover:bg-navy-800/70 transition-all 
                hover:scale-105 hover:border-cyber-blue/50
                animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="bg-cyber-blue/10 rounded-full p-3 
                  group-hover:bg-cyber-blue/20 transition-all"
                >
                  <Check className="w-6 h-6 text-cyber-blue group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3
                className="text-2xl font-bold text-white mb-2
                group-hover:text-cyber-blue transition-colors"
              >
                {solution.title}
              </h3>
              <h4 className="text-lg font-semibold bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
                {solution.subtitle}
              </h4>
              <p className="text-gray-400 font-mono leading-relaxed tracking-wider">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformBusiness;
