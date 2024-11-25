"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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

  // Reset photo index when member changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setPhotoIndex(0);
  }, [currentIndex]);

  // Auto cycle through member's photos every 3 seconds
  useEffect(() => {
    if (currentMember.photos.length <= 1) return;

    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % currentMember.photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMember.photos.length]);

  return (
    <div className="w-96">
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cyber-blue/5 rounded-2xl blur-3xl" />

        <div className="relative rounded-2xl p-6 bg-navy-800/50 border border-cyber-blue/20 backdrop-blur-sm h-[600px]">
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
          <div className="mt-16 mb-8 flex justify-center relative group">
            <div className="w-40 h-40 rounded-3xl bg-navy-900/50 border-4 border-cyber-blue/20 overflow-hidden backdrop-blur-sm">
              <Image
                src={currentMember.photos[photoIndex]}
                alt={`${currentMember.name} profile photo ${photoIndex + 1}`}
                width={220}
                height={220}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {currentMember.photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setPhotoIndex(
                      (prev) =>
                        (prev - 1 + currentMember.photos.length) %
                        currentMember.photos.length
                    )
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Previous photo of ${currentMember.name}`}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setPhotoIndex(
                      (prev) => (prev + 1) % currentMember.photos.length
                    )
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Next photo of ${currentMember.name}`}
                >
                  →
                </button>
              </>
            )}
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
          <div className="mt-6 grid grid-cols-2 gap-4 font-mono mb-8">
            {Object.entries(currentMember.stats).map(([key, value], index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="flex flex-col h-20 justify-center">
                <span className="text-gray-400 font-bold text-sm text-center">
                  {key}
                </span>
                <span className="text-cyber-blue text-lg text-center mt-1">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Card Number */}
          <div className="absolute bottom-6 right-6 font-mono text-cyber-blue text-sm">
            #{currentMember.cardNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
