"use client";

import AgentCard from "./AgentCard";
import { useState, useEffect, useRef } from "react";
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
    position: "SOCIAL MEDIA STRATEGIST",
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
    position: "CUSTOMER ENGAGEMENT SPECIALIST",
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
    position: "KNOWLEDGE BASE MANAGER",
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
    position: "PRODUCTIVITY COACH",
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
    position: "WORKFLOW AUTOMATION EXPERT",
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

const TYPED_WORDS = ["Business", "Brand", "Community"] as const;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [typedWord, setTypedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [zTranslate, setZTranslate] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-cycle effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === teamMembers.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Add this new effect for the typewriter animation
  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedWord(word.substring(0, typedWord.length + 1));
        setTypingSpeed(300);

        if (typedWord === word) {
          setTypingSpeed(2000); // Pause at end
          setIsDeleting(true);
        }
      } else {
        setTypedWord(word.substring(0, typedWord.length - 1));
        setTypingSpeed(100);

        if (typedWord === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedWord, isDeleting, wordIndex, typingSpeed]);

  // Update the scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress =
        1 - rect.bottom / (window.innerHeight + rect.height);

      // Calculate z-translation between 0 and 30 based on scroll
      const newZ = Math.max(0, Math.min(30, scrollProgress * 30));
      setZTranslate(newZ);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden"
    >
      <AnimatedBackground />

      {/* Updated gradient overlay with slower animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-dark-navy/95 to-dark-navy z-10 animate-[glow-pulse_8s_ease-in-out_infinite]" />

      {/* Slower radial glow with more subtle opacity changes */}
      <div
        className="absolute inset-0 z-[11]"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(66, 220, 255, 0.08) 0%, transparent 60%)",
          animation: "glow-pulse 8s ease-in-out infinite",
          animationDelay: "4s", // Offset timing for more dynamic effect
        }}
      />

      {/* Rest of the components remain the same */}
      <div
        className="absolute inset-0 z-[11] opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(66 220 255 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(66 220 255 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 z-[12] bg-gradient-radial from-cyber-blue/10 via-transparent to-transparent opacity-50" />

      {/* Main content - update z-index to be above new background elements */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 pl-20">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white">
            {/* Embrace AI.
              <br /> */}
            Future-Proof Your
            <br />
            <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
              {typedWord}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-gray-400 font-mono text-lg max-w-xl">
            Propel your business into the future with custom AI
            solutions—automate tasks, expand effortlessly, and outpace your
            competition.
          </p>
          <button
            type="button"
            className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-dark-navy px-8 py-3 rounded font-mono font-medium hover:bg-opacity-90 transition-all"
          >
            Book Your Free AI Consultation ⮕
          </button>
        </div>

        {/* Right Content - Updated with centered card and circular buttons */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-8 w-full max-w-[560px]">
            <div
              className="w-[384px] shrink-0"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  transform: `translateZ(${zTranslate}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <AgentCard
                  teamMembers={teamMembers}
                  currentIndex={currentIndex}
                />
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex gap-2 mt-4">
            {teamMembers.map((_, index) => (
              <button
                type="button"
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                onClick={() => {
                  setIsAutoPlaying(true);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-cyber-blue"
                    : "bg-cyber-blue/30 hover:bg-cyber-blue/50"
                }`}
                aria-label={`Go to agent ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
