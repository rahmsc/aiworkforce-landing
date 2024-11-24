"use client";

import { Check, Zap } from "lucide-react";

type Solution = {
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

type Benefit = {
  title: string;
  description: string;
};

const solutions: Solution[] = [
  {
    title: "Automated Development",
    description:
      "AI agents handle repetitive tasks, freeing up to 80% of development time",
  },
  {
    title: "24/7 Intelligent Support",
    description: "Round-the-clock customer service with 97% satisfaction rate",
  },
  {
    title: "Real-time Analytics",
    description: "Instant data insights with predictive modeling capabilities",
  },
  {
    title: "Rapid Design Iteration",
    description: "UI/UX designs generated and refined in minutes, not days",
  },
];

const stats: Stat[] = [
  { value: "300%", label: "Efficiency Boost" },
  { value: "80%", label: "Time Saved" },
  { value: "60%", label: "Cost Reduction" },
  { value: "200%", label: "ROI Increase" },
];

const benefits: Benefit[] = [
  {
    title: "Tailored Solution",
    description:
      "Custom-built solutions that perfectly match your specific needs and requirements",
  },
  {
    title: "100% Ownership",
    description:
      "Full ownership rights of the final product and all associated intellectual property",
  },
  {
    title: "Cheaper Solution",
    description: "Cost-effective development without compromising on quality",
  },
];

const TransformBusiness = () => {
  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Transform Your Business with{" "}
                <span className="text-cyber-blue">AI-Powered Solutions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {solutions.map((solution) => (
                <div key={solution.title} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="rounded-full p-1 bg-cyber-blue/20">
                      <Check className="w-4 h-4 text-cyber-blue" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-semibold text-lg">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyber-blue/5 rounded-3xl blur-3xl" />
            <div className="relative bg-navy-800/50 rounded-3xl p-8 backdrop-blur-sm border border-cyber-blue/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="relative bg-navy-900/50 rounded-xl p-6 border border-cyber-blue/20"
                  >
                    <Zap className="w-5 h-5 text-cyber-blue mb-2" />
                    <div className="space-y-1">
                      <div className="text-cyber-blue text-3xl font-bold">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 font-mono text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Key <span className="text-cyber-blue">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-navy-800/50 rounded-xl p-8 border border-cyber-blue/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-cyber-blue/10 rounded-full p-2">
                    <Check className="w-6 h-6 text-cyber-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-mono">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformBusiness;
