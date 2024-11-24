"use client";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Book a call",
      description:
        "We schedule a call to discuss through your needs precisely. We chat through the potential solutions and help you find the best fit for your needs.",
    },
    {
      number: "2",
      title: "We get to work",
      description:
        "Our team works hard to turn your requirements into a seamless working reality through careful planning and execution.",
    },
    {
      number: "3",
      title: "Your dream business",
      description:
        "Watch your business grow as your fully developed code is live, amazingly you will receive 100% ownership of the code and all its components.",
    },
  ];

  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          How It <span className="text-cyber-blue">Works</span>
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-navy-800/50 rounded-xl p-8 border border-cyber-blue/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                <div className="bg-cyber-blue/10 rounded-full p-4 w-14 h-14 flex items-center justify-center">
                  <span className="text-cyber-blue font-bold text-xl">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-mono">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
