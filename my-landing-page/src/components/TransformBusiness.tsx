"use client";

import { Check } from "lucide-react";

type Solution = {
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

const solutions: Solution[] = [
  {
    title: "10x Faster Development",
    description:
      "AI-powered automation handles repetitive tasks, delivering projects in days instead of months",
  },
  {
    title: "60% Cost Reduction",
    description:
      "Streamlined processes and AI efficiency translate to significant cost savings",
  },
  {
    title: "24/7 Intelligent Support",
    description:
      "Round-the-clock AI assistance with 97% customer satisfaction rate",
  },
];

const stats: Stat[] = [
  { value: "80%", label: "Development Time Saved" },
  { value: "97%", label: "Customer Satisfaction" },
  { value: "60%", label: "Cost Reduction" },
];

const TransformBusiness = () => {
  return (
    <section className="bg-background py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Transform Your Business with{" "}
            <span className="text-cyber-blue animate-pulse">
              AI-Powered Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the future of development with cutting-edge AI technology
            that delivers results
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div
                className="text-4xl md:text-5xl font-bold text-cyber-blue mb-2 
                group-hover:scale-110 transition-transform"
              >
                {stat.value}
              </div>
              <div className="text-gray-400 font-mono">{stat.label}</div>
            </div>
          ))}
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
                className="text-2xl font-bold text-white mb-3 
                group-hover:text-cyber-blue transition-colors"
              >
                {solution.title}
              </h3>
              <p className="text-gray-400 font-mono leading-relaxed">
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
