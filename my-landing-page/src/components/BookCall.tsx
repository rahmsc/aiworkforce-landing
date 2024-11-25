"use client";

import CalComEmbed from "./CalComEmbed";

const BookCall = () => {
  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to <span className="text-cyber-blue">Get Started?</span>
        </h2>

        <p className="text-gray-400 font-mono text-lg mb-8 max-w-2xl mx-auto">
          Book a free call to see what options work you and your business
        </p>

        <CalComEmbed />
      </div>
    </section>
  );
};

export default BookCall;
