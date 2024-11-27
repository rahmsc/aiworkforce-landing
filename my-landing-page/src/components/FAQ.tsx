"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can you integrate AI solutions with my existing systems?",
      answer:
        "Yes, I specialize in integrating custom AI solutions with your current software and workflows. The goal is to enhance your existing operations without disrupting them.",
    },
    {
      question: "Do I need technical expertise to work with you?",
      answer:
        "Not at all! We simplify the complex world of AI and software development. We'll guide you through each step—from understanding your vision to delivering a fully functional solution—so you can focus on running your business.",
    },
    {
      question: "How long will it take to develop my solution?",
      answer:
        "Project timelines vary based on scope and complexity. Typically, custom solutions take between 4 to 8 weeks. During our initial consultation, we'll provide a detailed timeline tailored to your project.",
    },
    {
      question: "What will it cost to build my custom AI solution?",
      answer:
        "Cost depends on the specific features and complexity of your project. As a solo developer, I offer competitive pricing and transparent estimates. We'll work together to align the project with your budget without compromising on quality.",
    },
    {
      question: "Will I have full ownership of the final product?",
      answer:
        "Yes, absolutely! Upon project completion, you will own 100% of the code and all its components. You'll have complete control over your custom solution.",
    },
    {
      question:
        "What kind of support do you offer after the project is finished?",
      answer:
        "I provide ongoing support to ensure your solution continues to meet your needs. Whether it's updates, troubleshooting, or future enhancements, I'm here to help your business grow.",
    },
  ];

  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Frequently Asked{" "}
          <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
            Questions
          </span>
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
