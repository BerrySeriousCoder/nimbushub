import { HoverEffect } from "../ui/card-hover-effect";
import lightning from '../../assets/lightning.png';
import serviceBg from '../../assets/svgs/servicesection.svg';

export const Services = () => {

  const cardData = [
    {
      "title": "Architecture Assessment & Audit",
      "overview": "Analyze the current system architecture of a client and identify areas for improvement.",
      "deliverables": "A detailed audit report covering bottlenecks, inefficiencies, and risks, along with prioritized recommendations for improvement."
    },
    {
      "title": "Scalable Architecture Design",
      "overview": "Design and recommend an architecture tailored to the client’s needs, using cloud-native or hybrid solutions to ensure scalability.",
      "deliverables": "Detailed architectural diagrams, a technology stack recommendation, and a step-by-step implementation plan."
    },
    {
      "title": "Technology Stack Consultation",
      "overview": "Help businesses choose the right technology stack based on their specific requirements, budget, and growth projections.",
      "deliverables": "A comprehensive report outlining recommended programming languages, frameworks, databases, and other tools."
    },
    {
      "title": "Microservices Strategy",
      "overview": "Guide clients in transitioning from a monolithic architecture to a microservices-based setup, if needed.",
      "deliverables": "A breakdown of services, strategies for data management, and a deployment plan using containerization and orchestration tools like Docker and Kubernetes."
    },
    {
      "title": "Cost Optimization Strategies",
      "overview": "Provide guidance on optimizing cloud resource usage and reducing infrastructure costs.",
      "deliverables": "An optimization plan with recommendations for autoscaling, efficient resource management, and cost monitoring."
    },
    {
      "title": "Mentorship & Training",
      "overview": "Offer training sessions for in-house development teams on best practices in system design and architecture.",
      "deliverables": "Workshops, training modules, and ongoing mentorship for the development team."
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${serviceBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="lg:h-full h-[2000px]  top-0 lg:pb-72 flex flex-col lg:justify-center items-center lg:gap-5  sm:py-20 lg:py-24"
    >
      <div className="font-anton flex  items-center  lg:gap-4 sm:flex-row sm:gap-6 text-2xl sm:text-5xl lg:text-6xl text-white">
        <img className="h-12 sm:h-16 lg:h-20 rotate-45" src={lightning} alt="lightning" />
        <span className="text-white">OUR SERVICES</span>
        <img className="h-12 sm:h-16 lg:h-20 -rotate-45 scale-x-[-1]" src={lightning} alt="lightning" />
      </div>

      <HoverEffect items={cardData} />
    </div>
  );
};
