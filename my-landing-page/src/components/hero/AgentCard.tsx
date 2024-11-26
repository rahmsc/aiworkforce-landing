"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  photos: string[];
  stats: Record<string, string>;
  cardNumber: string;
}

interface AgentCardProps {
  teamMembers: TeamMember[];
  currentIndex: number;
}

const AgentCard = ({ teamMembers, currentIndex }: AgentCardProps) => {
  const currentMember = teamMembers[currentIndex];
  const [photoIndex, setPhotoIndex] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setPhotoIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    if (currentMember.photos.length <= 1) return;

    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % currentMember.photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMember.photos.length]);

  const getNumericValue = (value: string) => {
    const match = value.match(/\d+/);
    return match ? Number.parseInt(match[0]) : 0;
  };

  const calculatePower = () => {
    const totalPower = Object.values(currentMember.stats).reduce(
      (sum, value) => sum + getNumericValue(value),
      0
    );
    return Math.min(totalPower, 999); // Cap at 999
  };

  return (
    <div className="w-[350px] animate-floating">
      <div className="relative group pt-8">
        {/* AI Agent Card Style */}
        <div className="relative rounded-[20px] bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/5 p-3">
          {/* Reduced opacity of holographic effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,220,255,0.1),transparent)] animate-[glow-pulse_8s_ease-in-out_infinite] rounded-[20px]" />

          <div className="relative bg-navy-800/30 rounded-lg p-4 backdrop-blur-sm border border-cyber-blue/20">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-white">
                {currentMember.name}
              </h3>
              <div className="text-cyber-blue font-bold">
                PWR {calculatePower()}
              </div>
            </div>

            {/* Image Section with Cyber Effect */}
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-[radial-gradient(ellipse_at_center,#1e3b70,#090a0f)]">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-30 animate-pulse" />
              <Image
                src={currentMember.photos[photoIndex]}
                alt={`${currentMember.name} profile`}
                fill
                className="object-cover"
              />
              <Sparkles className="absolute top-2 right-2 text-cyber-blue h-6 w-6 animate-pulse" />
            </div>

            {/* AI Agent Info */}
            <div className="text-sm text-cyber-blue mb-4 border-b border-cyber-blue/20 pb-2">
              <span className="text-md font-semibold capitalize tracking-wider">
                {currentMember.position}
              </span>{" "}
              • <br />
              Level {Number.parseInt(currentMember.cardNumber)} AI Agent
            </div>

            {/* Stats Section */}
            <div className="space-y-3">
              {Object.entries(currentMember.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-navy-900/50 rounded p-2 flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-cyber-blue/20 flex items-center justify-center text-cyber-blue">
                      {key.split(" ")[0]}
                    </div>
                    <span className="text-white font-medium">
                      {key.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  <span className="text-cyber-blue font-bold">{value}</span>
                </div>
              ))}
            </div>

            {/* Card Number */}
            <div className="absolute bottom-2 right-4 text-cyber-blue/60 text-sm">
              #{currentMember.cardNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
