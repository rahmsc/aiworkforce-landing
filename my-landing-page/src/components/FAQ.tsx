"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your software development house different?",
      answer:
        "We're not just another development agency. We specialize in helping entrepreneurs and small businesses create future-proof solutions through our 4-stage process: Design, Develop, Optimize, Deliver. Our boutique approach ensures personalized attention, agility, and custom-built solutions that align with your business goals.",
    },
    {
      question: "I'm not technical—can I still work with you?",
      answer:
        "Absolutely! We love working with non-technical founders and business owners. Our team simplifies the complex and walks you through every step—from understanding your vision to delivering a fully functional product. We handle the tech so you can focus on growing your business.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines vary depending on your project's scope and complexity. On average, smaller projects take 6–12 weeks, while more complex solutions might take longer. We'll provide a detailed timeline during the initial planning phase and keep you updated at every step.",
    },
    {
      question: "How much does it cost to build my project?",
      answer:
        "Costs depend on the features and complexity of your project. We offer transparent pricing and can help you prioritize features to fit your budget. Whether you're a startup or an established business, we'll work with you to deliver value-driven solutions without compromising quality.",
    },
    {
      question: "Will I own the code and intellectual property?",
      answer:
        "Yes! Once the project is complete, you will retain full ownership of the code and intellectual property. You'll have complete control over your product, ensuring it's truly yours.",
    },
    {
      question: "What if I need support after the project is completed?",
      answer:
        "We've got you covered! We offer post-launch support, including updates, troubleshooting, and optimization, to ensure your product continues to run smoothly. If you need to scale or make changes, we're here to help.",
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
