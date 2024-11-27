"use client";

import { Quote } from "lucide-react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with Dan has been transformative. The custom AI workflows he developed for us have revolutionised our operations. Tasks that used to consume hours are now automated and completed in seconds. It has allowed for our content creation abilities to skyrocket!",
      author: "Peter Frost",
      role: "Founder",
      company: "HyperbaricHQ",
      rating: 5,
      image: "/testimonial-photos/pete.jpg",
      linkedin: "https://www.linkedin.com/in/peter-frost-06a12317b/",
    },
    {
      quote:
        "Dan helped reshape our approach to AI and blockchain integration. His deep insights weren't just technical—they were fundamental in our entire product strategy. This has allowed for us to scale our platform faster and with more confidence.",
      author: "Alex Flamsteed",
      role: "CEO",
      company: "Temple Technology",
      rating: 5,
      image: "/testimonial-photos/alex.jpg",
      linkedin: "https://www.linkedin.com/in/alexflamsteed/",
    },
    {
      quote:
        "I was overwhelmed with processing a massive amount of data for an upcoming pitch. Working with Dan, I was about to turn what seemed impossible into a streamlined process. His speed and attention to detail were outstanding. In the end, I was able to meet my deadline with ease.",
      author: "Hannah Biddell",
      role: "Lead Researcher",
      company: "Emergence Benefactors",
      rating: 5,
      image: "/testimonial-photos/hannah.jpg",
      linkedin: "https://www.linkedin.com/in/hannah-biddell/",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-background py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Client{" "}
          <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
            Testimonials
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="group h-[500px] relative rounded-xl p-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent 
                hover:via-cyber-blue/80 transition-all duration-500
                animate-border-travel bg-[length:200%_200%]"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue to-transparent 
                rounded-xl animate-border-travel bg-[length:200%_200%] blur-sm opacity-50"
              />

              <div className="relative flex flex-col h-full bg-card-dark rounded-xl p-8">
                <Quote className="w-8 h-8 text-cyber-blue mb-6 flex-shrink-0" />
                <p className="text-gray-400 font-mono flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-blue scrollbar-track-transparent">
                  {testimonial.quote}
                </p>

                <div className="flex-shrink-0 pt-8">
                  <div className="flex items-start gap-4">
                    <Link
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-12 h-12 rounded-full overflow-hidden 
                        ring-2 ring-cyber-blue hover:ring-4 transition-all duration-300
                        flex-shrink-0"
                      aria-label={`Visit ${testimonial.author}'s LinkedIn profile`}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/fallback-avatar.jpg";
                        }}
                      />
                    </Link>

                    <div className="flex-1">
                      <p className="text-white font-bold text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-cyber-blue font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>

                    <div className="flex gap-0.5">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
