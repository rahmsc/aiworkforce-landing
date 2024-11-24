import AgentCard from "./AgentCard";

const HeroSection = () => {
  return (
    <section className="bg-dark-navy min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white">
            Next-Gen <span className="text-cyber-blue">AI</span>
            <br />
            <span className="text-cyber-blue">Agents</span> for Your
            <br />
            Business
          </h1>
          <p className="text-gray-400 font-mono text-lg max-w-xl">
            Transform your workflow with our collection of specialized AI
            agents. Each agent is crafted to deliver exceptional results in
            their domain.
          </p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="bg-cyber-blue text-dark-navy px-8 py-3 rounded font-mono font-medium hover:bg-opacity-90 transition-all">
            Explore Agents
          </button>
        </div>

        {/* Right Content */}
        <div className="flex justify-center ">
          <AgentCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
