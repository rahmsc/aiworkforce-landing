"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  photo: string;
  stats: Record<string, string>;
  yearJoined: string;
  cardNumber: string;
}

interface AgentCardProps {
  teamMembers: TeamMember[];
}

const AgentCard = ({ teamMembers }: AgentCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cyber-blue/5 rounded-2xl blur-3xl" />

        <div className="relative rounded-2xl p-6 bg-navy-800/50 border border-cyber-blue/20 backdrop-blur-sm">
          {/* AI-OPS Badge */}
          <div className="absolute top-6 left-6">
            <div className="bg-cyber-blue/10 text-cyber-blue font-bold py-1 px-4 rounded-md transform -rotate-6 border border-cyber-blue/20">
              AI•OPS
            </div>
          </div>

          {/* Premium Badge */}
          <div className="absolute top-6 right-6">
            <div className="text-cyber-blue font-mono font-semibold text-sm">
              PREMIUM AI AGENT
            </div>
          </div>

          {/* Agent Photo */}
          <div className="mt-12 mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-navy-900/50 border-4 border-cyber-blue/20 overflow-hidden backdrop-blur-sm">
              <Image
                src={currentMember.photo}
                alt={currentMember.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Agent Info */}
          <div className="bg-navy-900/50 -mx-6 p-4 backdrop-blur-sm border-y border-cyber-blue/20">
            <h3 className="text-3xl font-bold text-white mb-1">
              {currentMember.name}
            </h3>
            <p className="font-mono text-cyber-blue">
              {currentMember.position}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-4 grid grid-cols-2 gap-3 font-mono">
            {Object.entries(currentMember.stats).map(([key, value], index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="flex flex-col">
                <span className="text-gray-400 font-bold text-sm">{key}</span>
                <span className="text-cyber-blue text-sm">{value}</span>
              </div>
            ))}
          </div>

          {/* Card Footer */}
          <div className="mt-4 text-center font-mono text-gray-400 text-sm">
            Active since {currentMember.yearJoined}
          </div>

          {/* Card Number */}
          <div className="absolute bottom-3 right-5 font-mono text-cyber-blue text-sm">
            #{currentMember.cardNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
