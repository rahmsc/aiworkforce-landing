"use client";

import { ArrowRight, Zap } from "lucide-react";

const AiExpertise = () => {
  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Accelerate Growth with{" "}
              <span className="text-cyber-blue">AI Expertise</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-gray-400 font-mono text-lg">
                Transform your digital presence with our proven AI expertise.
                With years of successful collaborations in the AI space, we've
                mastered the art of leveraging artificial intelligence to build
                compelling digital identities.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-gray-400 font-mono text-lg">
                Having worked extensively with startups and early-stage
                companies, we understand your challenges. Our AI-powered
                solutions can help you achieve in months what traditionally took
                years.
              </p>
            </div>

            <div className="pt-6">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-cyber-blue hover:bg-cyber-blue/80 rounded-lg transition-colors duration-200 border border-cyber-blue/20"
                onClick={() => {}}
                aria-label="Schedule a consultation"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration with Glow Effect */}
        <div className="relative">
          {/* Glow Effect Background */}
          <div className="absolute inset-0 bg-cyber-blue/5 rounded-3xl blur-3xl" />

          <div className="relative bg-navy-800/50 rounded-3xl p-8 backdrop-blur-sm border border-cyber-blue/20">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "AI Projects" },
                { value: "95%", label: "Client Satisfaction" },
                { value: "24/7", label: "AI Support" },
              ].map((stat, index) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  className="relative bg-navy-900/50 rounded-xl p-6 border border-cyber-blue/20"
                >
                  <Zap className="w-5 h-5 text-cyber-blue mb-2" />
                  <div className="space-y-1">
                    <div className="text-cyber-blue text-3xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-mono text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiExpertise;
