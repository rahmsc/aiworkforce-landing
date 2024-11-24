"use client";

import { StatItem } from "./StatItem";
import { useState, useCallback, createElement } from "react";
import { Brain, TrendingUp, LineChart, type LucideIcon } from "lucide-react";

// Define the agent type for better type safety
type Agent = {
  id: number;
  name: string;
  role: string;
  icon: LucideIcon;
  stats: {
    accuracy: string;
    processed: string;
    insights: string;
    models: string;
  };
  since: string;
};

const agents: Agent[] = [
  {
    id: 1,
    name: "DataSage",
    role: "Data Analyst",
    icon: Brain,
    stats: {
      accuracy: "99%",
      processed: "5TB+",
      insights: "48/day",
      models: "120+",
    },
    since: "2023",
  },
  {
    id: 2,
    name: "MarketMind",
    role: "Marketing Strategist",
    icon: TrendingUp,
    stats: {
      accuracy: "97%",
      processed: "1M+",
      insights: "35/day",
      models: "85+",
    },
    since: "2023",
  },
  {
    id: 3,
    name: "SalesGenius",
    role: "Sales Optimizer",
    icon: LineChart,
    stats: {
      accuracy: "98%",
      processed: "2M+",
      insights: "52/day",
      models: "95+",
    },
    since: "2023",
  },
];

const AgentCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAgent = agents[currentIndex];

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-[280px] h-[392px] bg-card-dark rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-teal-dark bg-opacity-40">
          <div className="text-cyber-blue font-mono text-sm">AI·OPS</div>
          <div className="flex items-center space-x-2">
            <span className="text-cyber-blue text-sm">PREMIUM</span>
            <span className="text-cyber-blue text-sm">2023</span>
          </div>
        </div>

        {/* Main Content - adjusted padding for better spacing */}
        <div className="p-6 flex flex-col space-y-6">
          {/* Agent Icon - now using Lucide icons */}
          <div className="h-24 flex items-center justify-center">
            {createElement(currentAgent.icon, {
              className: "w-16 h-16 text-cyber-blue",
              strokeWidth: 1.5,
            })}
          </div>

          {/* Agent Info - adjusted text sizes */}
          <div className="space-y-1">
            <h2 className="text-white text-2xl font-bold text-center">
              {currentAgent.name}
            </h2>
            <p className="text-cyber-blue font-mono text-sm text-center">
              {currentAgent.role}
            </p>
          </div>

          {/* Stats Grid - adjusted spacing */}
          <div className="grid grid-cols-2 gap-3">
            <StatItem label="ACCURACY:" value={currentAgent.stats.accuracy} />
            <StatItem label="PROCESSED:" value={currentAgent.stats.processed} />
            <StatItem label="INSIGHTS:" value={currentAgent.stats.insights} />
            <StatItem label="MODELS:" value={currentAgent.stats.models} />
          </div>

          {/* Footer */}
          <div className="text-cyber-blue text-xs font-mono text-center">
            Active since {currentAgent.since}
          </div>
        </div>
      </div>

      {/* Navigation Dots - centered and closer together */}
      <div className="flex justify-center space-x-1.5 mt-2">
        {agents.map((agent, index) => (
          <button
            type="button"
            key={agent.id}
            onClick={() => handleDotClick(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleDotClick(index);
              }
            }}
            tabIndex={0}
            aria-label={`View ${agent.name}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-cyber-blue w-3" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentCard;
