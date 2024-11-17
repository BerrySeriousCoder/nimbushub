import { motion } from "framer-motion";
import infrastructure from '../../assets/infrastructure.png';
import { HoverEffect } from "../ui/card-hover-effect";

interface componentprop {
    data : 
        {
            title: String,
            overview: String,
            deliverables: String
          } ;
    
}




export const ServiceCard : React.FC<componentprop> = ({data}) => {
  return (
    <div className="perspective-1000 h-96 w-80"> 
         <div className="max-w-5xl mx-auto px-8">
    </div>
      <motion.div
        initial={{ rotateY: 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="h-full w-full border border-black bg-[#0d1639] rounded-md shadow-2xl text-3xl flex justify-center items-center text-center flex-col"
      >
        {/* Front Side */}
        <div
          className="absolute h-full w-full flex flex-col justify-center items-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className=" text-white font-anton">
            {data.title}
          </span>
          <div>
            <img className="h-24" src={infrastructure} alt="infrastructure" />
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute text-xl  font-roboto flex-col h-full w-full gap-4 flex justify-start  items-start bg-[#0d1639] text-white backface-hidden"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        > 
                  <div>
                  Overview :
                  </div  >  
                  <div className="text-base text-left" >
                 {data.overview}
                  </div>
                  <div>
                  Deliverables :
                  </div  >  
                  <div className="text-base text-left" >
                  {data.deliverables}
                  </div>
                  </div>
      </motion.div>
    </div>
  );
};
