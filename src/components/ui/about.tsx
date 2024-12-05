import { ArrowUpRight, Server, Cloud, Zap } from 'lucide-react'
import { useState } from 'react'
import { ScheduleMeetingPopup } from './formcard'

export default function AboutSectionCard() {
  const [isOpen , setIsOpen] = useState(false) 
  return (
    <section className=" lg:py-16 py-9 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="lg:text-3xl text-2xl font-extrabold text-gray-900 sm:text-4xl">
            About Nimbushub
          </h2>
          <p className="mt-4 lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We empower small businesses to achieve big dreams through scalable architecture.
          </p>
        </div>

        <div className="lg:mt-20 mt-7">
          <div className="grid grid-cols-1 lg:gap-8 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Server,
                title: "Tailored Solutions",
                description: "We craft custom scalable architectures that grow with your business, ensuring you're always ready for the next big opportunity."
              },
              {
                icon: Cloud,
                title: "Cloud Expertise",
                description: "Our team leverages cutting-edge cloud technologies to build flexible, cost-effective infrastructures that adapt to your needs."
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "We fine-tune your systems for peak performance, helping you serve customers faster and more efficiently as you scale."
              }
            ].map((feature, index) => (
              <div key={index} className="relative p-6 bg-[#0d1639] rounded-lg">
                <div className="absolute top-6 right-6">
                  <feature.icon className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
                </div>
                <h3 className="mt-8 lg:text-lg  font-medium text-white">{feature.title}</h3>
                <p className="mt-2 lg:text-base text-sm text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:mt-20 mt-7 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="mt-4 lg:text-xl text-black lg:text-gray-600 max-w-3xl mx-auto">
            At Nimbushub Solutions, we're dedicated to empowering small businesses with the architectural foundation they need to scale confidently. We believe that with the right technology backbone, any business can compete at a global level.
          </p>
        </div>

        <div onClick={() => setIsOpen(true)}  className="mt-12 text-center hidden lg:block"> 
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Scaling Today
            <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
        <ScheduleMeetingPopup isOpen={isOpen} 
         onClose={() => {setIsOpen(false)}} ></ScheduleMeetingPopup>
      </div>
    </section>
  )
}

