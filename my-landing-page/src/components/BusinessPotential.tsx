"use client";

import { X } from "lucide-react";

const challenges = [
  "Manual tasks consuming valuable development time",
  "Struggling to maintain 24/7 customer support",
  "Data analysis bottlenecks slowing decision-making",
  "Design iterations taking too long to implement",
];

const BusinessPotential = () => {
  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Column - Icon */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Outer circle */}
            <div className="absolute inset-0 border border-cyber-blue/30 rounded-full" />

            {/* Middle circle with diagonal lines */}
            <div className="absolute inset-4 border border-cyber-blue rounded-full transform -rotate-45">
              <div className="absolute inset-0 border-t border-cyber-blue transform rotate-90" />
            </div>

            {/* Inner circle with plus */}
            <div className="absolute inset-8 border border-cyber-blue rounded-full flex items-center justify-center">
              <span className="text-cyber-blue text-4xl font-thin">+</span>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Is Your Business Reaching Its{" "}
              <span className="text-cyber-blue">Full Potential?</span>
            </h2>
          </div>

          <ul className="space-y-4">
            {challenges.map((challenge, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index} className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20">
                  <X className="w-3 h-3 text-red-500" />
                </span>
                <span className="text-gray-400 font-mono">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessPotential;
