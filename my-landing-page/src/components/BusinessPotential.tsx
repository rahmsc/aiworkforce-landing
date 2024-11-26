"use client";

import { X } from "lucide-react";

const challenges = [
  "Automating time-consuming tasks",
  "Improving customer experiences with AI",
  "Unlocking insights from data",
  "Scaling workflows with automation",
];

const BusinessPotential = () => {
  return (
    <section
      className="bg-background py-32 px-4 md:px-8"
      aria-labelledby="business-potential-title"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left Column - SVG (was previously on right) */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative w-48 h-48 md:w-72 md:h-72">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Enhanced Definitions */}
              <defs>
                {/* Hexagonal Grid Pattern */}
                <pattern
                  id="hexGrid"
                  width="20"
                  height="17.32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M10 0l8.66 5v10L10 20l-8.66-5V5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.2"
                    className="text-cyber-blue/5"
                  />
                </pattern>

                {/* Radial Pulse Gradient */}
                <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" className="text-cyber-blue/30" />
                  <stop offset="70%" className="text-cyber-blue/10" />
                  <stop offset="100%" className="text-cyber-blue/0" />
                </radialGradient>

                {/* Enhanced Glow Filter */}
                <filter
                  id="enhancedGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur1" />
                  <feGaussianBlur stdDeviation="1" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Neural Network Lines */}
                <pattern
                  id="neuralNet"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    r="0.5"
                    cx="20"
                    cy="20"
                    className="fill-cyber-blue/10"
                  />
                  <path
                    d="M0 20h40M20 0v40"
                    className="stroke-cyber-blue/5"
                    strokeWidth="0.2"
                  />
                </pattern>
              </defs>

              {/* Animated Background Layers */}
              <rect width="200" height="200" fill="url(#hexGrid)">
                <animate
                  attributeName="opacity"
                  values="0.8;0.4;0.8"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                width="200"
                height="200"
                fill="url(#neuralNet)"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.1;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Rotating Outer Ring */}
              <circle
                cx="100"
                cy="100"
                r="80"
                className="stroke-cyber-blue/20"
                fill="none"
                strokeWidth="0.5"
                strokeDasharray="2 4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="-360 100 100"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Dynamic Core Structure */}
              <g filter="url(#enhancedGlow)">
                {/* Hexagonal Core */}
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <path
                    key={angle}
                    d={"M100 70l17.32 10v20L100 110l-17.32-10V80z"}
                    className="fill-cyber-blue/5 stroke-cyber-blue/40"
                    strokeWidth="0.5"
                    transform={`rotate(${angle} 100 100)`}
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.4;0.8;0.4"
                      dur="3s"
                      repeatCount="indefinite"
                      begin={`${angle / 360}s`}
                    />
                  </path>
                ))}
              </g>

              {/* Energy Flow Paths */}
              <g className="text-cyber-blue/30">
                {[0, 72, 144, 216, 288].map((angle) => (
                  <path
                    key={angle}
                    d={"M100 40Q130 70,100 100Q70 130,100 160"}
                    className="stroke-current"
                    fill="none"
                    strokeWidth="0.5"
                    transform={`rotate(${angle} 100 100)`}
                  >
                    <animate
                      attributeName="d"
                      values="M100 40Q130 70,100 100Q70 130,100 160;
                              M100 40Q140 70,100 100Q60 130,100 160;
                              M100 40Q130 70,100 100Q70 130,100 160"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </path>
                ))}
              </g>

              {/* Quantum Particle Effects */}
              {[...Array(20)].map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <g key={i} className="text-cyber-blue">
                  <circle r="0.8" className="fill-current">
                    <animateMotion
                      path="M0,0 A40,40 0 1,1 0,80 A40,40 0 1,1 0,0"
                      dur={`${3 + (i % 5)}s`}
                      repeatCount="indefinite"
                      begin={`-${i * 0.2}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`-${i * 0.1}s`}
                    />
                  </circle>
                </g>
              ))}

              {/* Central AI Text */}
              <g filter="url(#enhancedGlow)">
                <text
                  x="100"
                  y="105"
                  className="text-4xl font-bold fill-cyber-blue text-center"
                  textAnchor="middle"
                >
                  AI
                  <animate
                    attributeName="opacity"
                    values="1;0.6;1"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </text>
              </g>

              {/* Data Stream Effects */}
              {[0, 120, 240].map((angle) => (
                <path
                  key={angle}
                  d="M60 100Q100 60,140 100Q100 140,60 100"
                  className="stroke-cyber-blue/20"
                  fill="none"
                  strokeWidth="0.3"
                  transform={`rotate(${angle} 100 100)`}
                >
                  <animate
                    attributeName="d"
                    values="M60 100Q100 60,140 100Q100 140,60 100;
                            M60 100Q100 50,140 100Q100 150,60 100;
                            M60 100Q100 60,140 100Q100 140,60 100"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </path>
              ))}
            </svg>

            {/* Enhanced Ambient Glow */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-cyber-blue/5 blur-3xl rounded-full animate-pulse" />
              <div className="absolute inset-10 bg-cyber-blue/3 blur-2xl rounded-full animate-pulse [animation-delay:0.5s]" />
            </div>
          </div>
        </div>

        {/* Right Column - Content (was previously on left) */}
        <div className="space-y-10 order-1 md:order-2">
          <div className="space-y-4">
            <h2
              id="business-potential-title"
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Is AI Still on Your <br />
              <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
                To-Do List?
              </span>
            </h2>
          </div>

          <ul className="space-y-6">
            {challenges.map((challenge) => (
              <li key={challenge} className="group flex items-start space-x-4">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 mt-1">
                  <X className="w-5 h-5 text-red-500" />
                </span>
                <span className="block text-gray-200 text-lg">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessPotential;
