"use client";

import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
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

  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Key <span className="text-cyber-blue">Benefits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
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
    </section>
  );
};

export default Benefits;
