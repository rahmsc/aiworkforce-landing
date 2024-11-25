"use client";

import { Quote } from "lucide-react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We had an excellent experience working with this team. They were able to create exactly what's impossible without and also helped us improve on all the advice's, it's incredible productivity at the end.",
      author: "Alex Thompson",
      role: "Digital",
      rating: 5,
      image: "/alex-profile.jpg",
      twitter: "https://twitter.com/alexthompson",
    },
    {
      quote:
        "I was so deeply satisfied and happy for their capabilities to help AI & Machine learning. My knowledge was improved in developing up my product, now we're making profit in ways to scaling up my business.",
      author: "Sarah Chen",
      role: "Tech",
      rating: 5,
      image: "/sarah-profile.jpg",
      twitter: "https://twitter.com/sarahchen",
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
    <section className="bg-background py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Client <span className="text-cyber-blue">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="group relative rounded-xl p-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-border-travel bg-[length:200%_200%]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue to-transparent rounded-xl animate-border-travel bg-[length:200%_200%] blur-sm opacity-50" />

              <div className="relative bg-card-dark rounded-xl p-10">
                <Quote className="w-8 h-8 text-cyber-blue mb-6" />
                <p className="text-gray-400 font-mono mb-8">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    href={testimonial.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-cyber-blue hover:ring-4 transition-all duration-300"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  <div className="flex-1">
                    <p className="text-white font-bold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">
                      from {testimonial.role}
                    </p>
                  </div>

                  <div className="flex gap-0.5">
                    {renderStars(testimonial.rating)}
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
