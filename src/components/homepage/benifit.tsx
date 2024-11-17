

import { motion } from "framer-motion";
import { useState } from "react";
import systemDesignImg from '../../assets/operating-system.png'
import statistics from '../../assets/statistics.png'
import report from '../../assets/report.png'
import microServices from '../../assets/microservice.png'
import language from '../../assets/language.png'
import growth from '../../assets/growth.png'
const clientBenefits = [
  {
    title: "Optimized Performance",
    description: "Experience faster load times and better responsiveness. Our architecture designs ensure your system performs efficiently even under high traffic, giving your users a seamless experience."
  },
  {
    title: "Scalability for Growth",
    description: "Our scalable solutions grow with your business, accommodating increased user demand without sacrificing performance. Stay prepared for future growth without costly overhauls."
  },
  {
    title: "Reduced Infrastructure Costs",
    description: "Save money by optimizing your infrastructure. We use cloud-native strategies to minimize unnecessary resource usage while maximizing performance."
  },
  {
    title: "Reliability and Uptime",
    description: "Achieve high availability and minimal downtime with our fault-tolerant architectures. Your services remain operational, even when unexpected failures occur."
  },
  {
    title: "Efficient Resource Management",
    description: "With our guidance, make the most of your technical resources. Our architecture ensures efficient allocation, reducing waste and improving productivity."
  },
  {
    title: "Customized Solutions",
    description: "We tailor our strategies to meet your unique business needs. Whether you’re a startup or a scaling enterprise, our architecture solutions are designed just for you."
  },
  {
    title: "Security and Compliance",
    description: "Protect your data and ensure compliance with industry standards. We implement security best practices to keep your system and user data safe."
  },
  {
    title: "Expert Guidance and Support",
    description: "Work with a team of seasoned architects who are committed to your success. We offer ongoing support and mentorship to your development teams."
  }
];

// export const ClientBenefitSection = () => {
//   return (
//     <div className=" pt-80 h-full grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-8 bg-[#355be0]">
//       {clientBenefits.map((benefit, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//           className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
//         >
//           <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
//           <p className="text-gray-600">{benefit.description}</p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };


export const ClientBenefits = () => {
  return (
    <div className="flex h-[1000px] justify-center items-center bg-[#73e8e7]">
      <div className="w-1/3">
        {clientBenefits.map((element, index) => (
          <BenefitCard key={index} element={element} />
        ))}
      </div>

      <div className="relative flex justify-center items-center w-1/2">
        {/* Blue Card */}
        <div className="h-4/5 w-3/4 bg-[#192966] rounded-tr-[50px] rounded-tl-[200px] rounded-bl-[50px] rounded-br-[200px]">
          {/* Main Image (systemDesignImg) */}
          <div className="flex justify-center items-center h-full">
            <img className="h-96 " src={systemDesignImg} alt="System Design" />
          </div>
        </div>
        {/* Positioned Images */}
        <img
          className="absolute bottom-20 h-48" 
          src={statistics}
          alt="Statistics"
        />
        <img
          className="absolute  right-10 top-1/3 h-80" 
          src={report}
          alt="Report"
        />
        <img 
        className="absolute mr-96 top-32 h-52  "
        src={microServices}
        alt="microServiceImage"
        />
        <img 
        className="absolute h-52 bottom-44 left-44"
        src={language}
        alt="languageImage"
        />
        <img 
        className="absolute h-52 top-10 right-52 "
        src={growth}
        alt="growthImage"
        />
      </div>
    </div>
  );
};


interface BenefitCardProp {
  element : {
    title : string ,
    description : string 
  }
}

const BenefitCard: React.FC<BenefitCardProp> = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="p-6 font-robotoCondensed rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
      onClick={toggleOpen}
      initial={{ height: "auto" }}
      animate={{ height: isOpen ? "auto" : "100px" }} 
      transition={{ duration: 0.3 }}
    >
      <div className="text-xl font-semibold mb-2">{element.title}</div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-2">{element.description}</p>
      </motion.div>
    </motion.div>
  );
};
