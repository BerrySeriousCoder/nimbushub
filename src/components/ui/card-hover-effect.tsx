import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import point from '../../assets/point.png'
import check from '../../assets/check.png'
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    deliverables: string;
    overview : string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#2a98ff]  block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle> 
            <div className=" text-base lg:text-xl font-oswald text-white py-4 flex items-center gap-2"  > 
            <img className="  h-5  " src={check} alt="check" />
               Overview 
            </div>
            
            <CardOverview>{item.overview}</CardOverview>
            <div className="text-base lg:text-xl font-oswald text-white py-4 flex items-center gap-2 "  > 
            <img className="h-5" src={check} alt="check" />
              Deliverables 
            </div>
            <CardDescription>{item.deliverables}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-[#192966] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-antontwo text-lg lg:text-2xl tracking-wide  lg:mt-4 flex items-center gap-3", className)}>
      <img className=" h-10 lg:h-16" src={point} alt="point" />
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-cyan-300 font-robotoCondensed tracking-wide leading-relaxed  text-sm lg:text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardOverview = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-cyan-300 font-robotoCondensed tracking-wide leading-relaxed text-sm lg:text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
