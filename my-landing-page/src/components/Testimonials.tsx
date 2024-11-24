"use client";

import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We had an excellent experience working with this team. They were able to create exactly what's impossible without and also helped us improve on all the advice's, it's incredible productivity at the end.",
      author: "Alex from Digital",
    },
    {
      quote:
        "I was so deeply satisfied and happy for their capabilities to help AI & Machine learning. My knowledge was improved in developing up my product, now we're making profit in ways to scaling up my business.",
      author: "Sarah from Tech",
    },
  ];

  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Client <span className="text-cyber-blue">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="bg-navy-800/50 rounded-xl p-8 border border-cyber-blue/20 backdrop-blur-sm"
            >
              <Quote className="w-8 h-8 text-cyber-blue mb-4" />
              <p className="text-gray-400 font-mono mb-4">
                {testimonial.quote}
              </p>
              <p className="text-white font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
