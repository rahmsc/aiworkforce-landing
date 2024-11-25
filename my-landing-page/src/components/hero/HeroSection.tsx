"use client";

import AgentCard from "./AgentCard";
import { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

type TeamMember = {
  name: string;
  position: string;
  photos: string[];
  stats: Record<string, string>;

  cardNumber: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sam",
    position: "Social Media Strategist",
    photos: ["/assets/agent-headshots/2.jpg"],
    stats: {
      "🏆 Engagement Rate": "⬆ 22%",
      "⚡ Daily Posts": "24",
      "🌎 Audience Reach": "1M+",
      "🚀 Follower Growth": "+5K/mo",
    },
    cardNumber: "001",
  },
  {
    name: "Alex",
    position: "Customer Engagement Specialist",
    photos: ["/assets/agent-headshots/1.jpg"],
    stats: {
      "⏱️ Response Time": "30 secs",
      "😊 Satisfaction Rate": "98%",
      "💬 Messages/Day": "1000+",
      "🌍 Languages": "12",
    },
    cardNumber: "002",
  },

  {
    name: "Taylor",
    position: "Knowledge Base Manager",
    photos: ["/assets/agent-headshots/4.jpg"],
    stats: {
      "✔️ Accuracy": "99.5%",
      "📚 Database Size": "10 TB",
      "🔍 Queries Handled": "1000+/day",
      "🌐 Sources Maintained": "500+",
    },
    cardNumber: "003",
  },
  {
    name: "Jordan",
    position: "Productivity Coach",
    photos: ["/assets/agent-headshots/5.jpg"],
    stats: {
      "⏱️ Time Saved": "40hrs/mo",
      "✅ Tasks Completed": "500+/week",
      "⭐ Client Rating": "4.9/5",
      "📈 ROI Achieved": "300%",
    },
    cardNumber: "004",
  },
  {
    name: "Casey",
    position: "Workflow Automation Expert",
    photos: ["/assets/agent-headshots/6.jpg"],
    stats: {
      "🔄 Processes Automated": "100+",
      "⚡ Efficiency Boost": "+35%",
      "💵 Revenue Generated": "$500K/yr",
      "🖥️ Systems Optimized": "25+",
    },
    cardNumber: "005",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 py-20">
      <AnimatedBackground />
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white">
            Unleash AI.
            <br />
            Transform Your <span className="text-cyber-blue">Business</span>
            {/* with Custom AI */}
          </h1>
          <p className="text-gray-400 font-mono text-lg max-w-xl">
            Revolutionise your business with cutting-edge AI—streamline
            workflows, scale effortlessly, and stay ahead of the competition.
          </p>
          <button
            type="button"
            className="bg-cyber-blue text-dark-navy px-8 py-3 rounded font-mono font-medium hover:bg-opacity-90 transition-all"
          >
            Book YOUR free consultation ⮕
          </button>
        </div>

        {/* Right Content - Updated with navigation controls */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous agent"
            className="text-cyber-blue hover:text-white transition-colors p-2"
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex-1">
            <AgentCard teamMembers={teamMembers} currentIndex={currentIndex} />
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next agent"
            className="text-cyber-blue hover:text-white transition-colors p-2"
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
