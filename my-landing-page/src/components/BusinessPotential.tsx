"use client";

import { X } from "lucide-react";

const challenges = [
  "Automate repetitive tasks",
  "Set up my own GPT",
  "Enhance customer experiences with AI chatbots",
  "Analyse customer data",
];

const BusinessPotential = () => {
  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Column - Icon */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Hexagonal Grid Background */}
              <pattern
                id="hexGrid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                className="opacity-10"
              >
                <path
                  d="M10 1L19 5.5V14.5L10 19L1 14.5V5.5L10 1Z"
                  stroke="currentColor"
                  className="text-cyber-blue"
                />
              </pattern>
              <rect width="200" height="200" fill="url(#hexGrid)" />

              {/* Central Flow Lines */}
              <path
                d="M40 100 H80 Q100 100 100 80 V60"
                stroke="currentColor"
                className="text-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,1000;200,0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M160 100 H120 Q100 100 100 120 V140"
                stroke="currentColor"
                className="text-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,1000;200,0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Nodes */}
              <circle
                cx="40"
                cy="100"
                r="8"
                className="fill-cyber-blue/20 stroke-cyber-blue"
                strokeWidth="2"
              />
              <circle
                cx="160"
                cy="100"
                r="8"
                className="fill-cyber-blue/20 stroke-cyber-blue"
                strokeWidth="2"
              />
              <circle
                cx="100"
                cy="60"
                r="8"
                className="fill-cyber-blue/20 stroke-cyber-blue"
                strokeWidth="2"
              />
              <circle
                cx="100"
                cy="140"
                r="8"
                className="fill-cyber-blue/20 stroke-cyber-blue"
                strokeWidth="2"
              />

              {/* Central Processing Unit */}
              <rect
                x="85"
                y="85"
                width="30"
                height="30"
                className="fill-cyber-blue/20 stroke-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;1;0.2"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Pulse Rings */}
              <circle
                cx="100"
                cy="100"
                r="20"
                className="stroke-cyber-blue/30"
                strokeWidth="1"
                fill="none"
              >
                <animate
                  attributeName="r"
                  values="20;40"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Is AI Still on Your{" "}
              <span className="text-cyber-blue">To-Do List?</span>
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
