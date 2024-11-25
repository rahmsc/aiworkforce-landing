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
              {/* Background Grid */}
              <pattern
                id="grid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20 0L0 0 0 20"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-cyber-blue/10"
                />
              </pattern>
              <rect width="200" height="200" fill="url(#grid)" />

              {/* Main Chip Body */}
              <rect
                x="50"
                y="50"
                width="100"
                height="100"
                className="fill-cyber-blue/20 stroke-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="stroke-opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Chip Connectors */}
              {/* Left */}
              <line
                x1="20"
                y1="70"
                x2="50"
                y2="70"
                className="stroke-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="x2"
                  values="50;45;50"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="20"
                y1="130"
                x2="50"
                y2="130"
                className="stroke-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="x2"
                  values="50;45;50"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>

              {/* Right */}
              <line
                x1="150"
                y1="70"
                x2="180"
                y2="70"
                className="stroke-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="x1"
                  values="150;155;150"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="150"
                y1="130"
                x2="180"
                y2="130"
                className="stroke-cyber-blue"
                strokeWidth="2"
              >
                <animate
                  attributeName="x1"
                  values="150;155;150"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>

              {/* Chip Internal Circuit Lines */}
              <path
                d="M60 60 L140 60 M60 80 L140 80 M60 100 L140 100 M60 120 L140 120 M60 140 L140 140"
                className="stroke-cyber-blue/30"
                strokeWidth="1"
              />
              <path
                d="M60 60 L60 140 M80 60 L80 140 M100 60 L100 140 M120 60 L120 140 M140 60 L140 140"
                className="stroke-cyber-blue/30"
                strokeWidth="1"
              />

              {/* Enhanced Curved Energy Lines */}
              <g className="text-cyber-blue/60">
                {/* Top Energy Curves */}
                <path
                  d="M80 50 Q90 20 100 50"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M80 50 Q90 20 100 50;M80 50 Q90 10 100 50;M80 50 Q90 20 100 50"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M100 50 Q110 30 120 50"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M100 50 Q110 30 120 50;M100 50 Q110 15 120 50;M100 50 Q110 30 120 50"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Bottom Energy Curves */}
                <path
                  d="M80 150 Q90 180 100 150"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M80 150 Q90 180 100 150;M80 150 Q90 190 100 150;M80 150 Q90 180 100 150"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M100 150 Q110 170 120 150"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M100 150 Q110 170 120 150;M100 150 Q110 185 120 150;M100 150 Q110 170 120 150"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Side Energy Curves */}
                <path
                  d="M50 80 Q20 90 50 100"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M50 80 Q20 90 50 100;M50 80 Q10 90 50 100;M50 80 Q20 90 50 100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M150 80 Q180 90 150 100"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M150 80 Q180 90 150 100;M150 80 Q190 90 150 100;M150 80 Q180 90 150 100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Floating Energy Particles along Curves */}
              <g className="text-cyber-blue">
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <circle key={angle} r="1.5" className="fill-current">
                    <animateMotion
                      path="M80 50 Q90 20 100 50"
                      dur={`${2 + (angle % 3)}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>

              {/* Pulsing Glow Points */}
              <g className="text-cyber-blue">
                {[45, 135, 225, 315].map((angle) => (
                  <circle
                    key={angle}
                    cx={100 + 60 * Math.cos((angle * Math.PI) / 180)}
                    cy={100 + 60 * Math.sin((angle * Math.PI) / 180)}
                    r="2"
                    className="fill-current"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin={`${angle / 360}s`}
                    />
                    <animate
                      attributeName="r"
                      values="2;3;2"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${angle / 360}s`}
                    />
                  </circle>
                ))}
              </g>

              {/* AI Text */}
              <text
                x="100"
                y="105"
                className="text-3xl font-bold fill-cyber-blue text-center"
                textAnchor="middle"
              >
                AI
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </text>

              {/* Pulsing Energy Effects */}
              <g className="text-cyber-blue">
                {/* Top Pulse */}
                <circle cx="100" cy="30" r="2" className="fill-current">
                  <animate
                    attributeName="opacity"
                    values="1;0;1"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="50;20;50"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Bottom Pulse */}
                <circle cx="100" cy="170" r="2" className="fill-current">
                  <animate
                    attributeName="opacity"
                    values="1;0;1"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="150;180;150"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Energy Particles */}
              <g className="text-cyber-blue/50">
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <circle
                    key={angle}
                    cx="100"
                    cy="100"
                    r="1"
                    className="fill-current"
                    transform={`rotate(${angle} 100 100)`}
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0;1"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
            </svg>

            {/* Enhanced Outer Glow Effect */}
            <div className="absolute inset-0 bg-cyber-blue/5 blur-2xl rounded-full">
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
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
              Is AI Still on Your{" "}
              <span className="text-cyber-blue">To-Do List?</span>
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
