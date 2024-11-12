import { ServiceCard } from "../subcomponents/serviceCard"
import { HoverEffect } from "../ui/card-hover-effect"



export const Services = () => { 


  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

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
        // {
        //   "title": "Performance & Scalability Testing",
        //   "overview": "Conduct performance testing to ensure the system can handle traffic spikes and plan for future scalability.",
        //   "deliverables": "A detailed report with test results, identified weaknesses, and a plan for improvement."
        // }
      ]
      
    return (
        <div className="h-svh pt-48 bg-[#355be0] flex  gap-5 justify-center" > 
        
           {/* <ServiceCard data={cardData} ></ServiceCard> */}
           <HoverEffect items={cardData} ></HoverEffect>
      
                  
        </div>
    )
}