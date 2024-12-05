import { Check } from 'lucide-react'
import { useState } from 'react';
import { ScheduleMeetingPopup } from './formcard';

const pricingPlans = [
  {
    name: "Starter",
    price: "Rs.4999/month",
    description: "Ideal for startups and small businesses starting their scalability journey.",
    features: [
      "Architecture assessment & audit",
      "Technology stack consultation",
      "Monthly performance review",
      "Email support",
    ],
    cta: "Get Started",
    recommended: false,
  },
  {
    name: "Growth",
    price: "Rs.9999/month",
    description: "Perfect for scaling businesses with growing needs.",
    features: [
      "Scalable architecture design",
      "Microservices strategy",
      "Bi-weekly performance & scalability testing",
      "Priority email & phone support",
      "Access to exclusive webinars",
    ],
    cta: "Upgrade to Growth",
    recommended: true, // Marking this plan as recommended
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Comprehensive solutions tailored for large enterprises.",
    features: [
      "Dedicated solutions architect",
      "Custom integrations & tools",
      "24/7 dedicated support",
      "On-site training & mentorship",
      "Cost optimization strategies",
      "Custom workshops & performance testing",
    ],
    cta: "Contact Us",
    recommended: false,
  },
];


export default function PricingCards() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <div  className=" lg:py-12 py-6 px-4 sm:px-6 lg:px-8   ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pricing Plans</h2>
          <p className="mt-4 lg:text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>
        <div className="lg:mt-16 mt-4 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col bg-[#0d1639] justify-between p-8 rounded-lg shadow-md ${
                plan.recommended ? "border-2 border-blue-500" : "border border-gray-200"
              }`}
            >
              <div>
                <h3 className=" lg:text-2xl text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-4  lg:text-base text-sm text-white">{plan.description}</p>
                <div className="lg:mt-8 mt-3 text-center">
                  <span className="lg:text-4xl text-2xl font-extrabold text-white">{plan.price}</span>
                </div>
                <ul className="lg:mt-8 mt-3 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-white lg:text-base text-sm ">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
              onClick={() => {setIsOpen(true)}}
                className={`mt-8 w-full py-2 px-4 border rounded-md font-medium text-white hover:text-black ${
                  plan.recommended
                    ? "bg-blue-600 text-white hover:bg-blue-700 "
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {plan.cta}
              </button> 
              <ScheduleMeetingPopup isOpen={isOpen} onClose={() => {setIsOpen(false)}} ></ScheduleMeetingPopup>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

