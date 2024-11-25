"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your software development team different?",
      answer:
        "Our team combines deep technical expertise with years of experience and client businesses needs understanding. We focus on delivering tailored solutions that perfectly match your specific requirements.",
    },
    {
      question: "Do you provide source code with the work?",
      answer:
        "Yes! You receive 100% ownership of all source code and associated files. The work is completely your property.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. We provide detailed project plans and keep you updated at every step.",
    },
  ];

  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Frequently Asked <span className="text-cyber-blue">Questions</span>
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((faq, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="bg-navy-800/50 rounded-xl border border-cyber-blue/20 backdrop-blur-sm"
            >
              <button
                type="button"
                className="w-full px-8 py-6 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-bold text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyber-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyber-blue" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-400 font-mono">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
