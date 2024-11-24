import AgentCard from "./AgentCard";

type TeamMember = {
  name: string;
  position: string;
  photo: string;
  stats: Record<string, string>;
  yearJoined: string;
  cardNumber: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Alex",
    position: "Customer Engagement Specialist",
    photo: "/placeholder.svg?height=80&width=80",
    stats: {
      "Response Time": "30s",
      Satisfaction: "98%",
      "Messages/Day": "1000+",
      Languages: "12",
    },
    yearJoined: "2023",
    cardNumber: "001",
  },
  {
    name: "Sam",
    position: "Social Media Strategist",
    photo: "/placeholder.svg?height=80&width=80",
    stats: {
      Engagement: "12%",
      "Posts/Day": "24",
      Reach: "1M+",
      Growth: "+5k/mo",
    },
    yearJoined: "2023",
    cardNumber: "002",
  },
  {
    name: "Taylor",
    position: "Knowledge Base Manager",
    photo: "/placeholder.svg?height=80&width=80",
    stats: {
      Accuracy: "99.5%",
      Database: "10TB",
      Queries: "1000+/day",
      Sources: "500+",
    },
    yearJoined: "2023",
    cardNumber: "003",
  },
  {
    name: "Jordan",
    position: "Productivity Coach",
    photo: "/placeholder.svg?height=80&width=80",
    stats: {
      "Time Saved": "40hrs/mo",
      Tasks: "500+/week",
      Rating: "4.9/5",
      ROI: "300%",
    },
    yearJoined: "2023",
    cardNumber: "004",
  },
  {
    name: "Casey",
    position: "Workflow Automation Expert",
    photo: "/placeholder.svg?height=80&width=80",
    stats: {
      Processes: "100+",
      Efficiency: "+35%",
      Revenue: "$500k/yr",
      Systems: "25+",
    },
    yearJoined: "2023",
    cardNumber: "005",
  },
];

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
          <button
            type="button"
            className="bg-cyber-blue text-dark-navy px-8 py-3 rounded font-mono font-medium hover:bg-opacity-90 transition-all"
          >
            Explore Agents
          </button>
        </div>

        {/* Right Content - Updated with navigation controls */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Previous agent"
            className="text-cyber-blue hover:text-white transition-colors p-2"
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex-1">
            <AgentCard teamMembers={teamMembers} />
          </div>

          <button
            type="button"
            aria-label="Next agent"
            className="text-cyber-blue hover:text-white transition-colors p-2"
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
