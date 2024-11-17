const ZigZagSeparator = () => {
    return (
      <div className="relative w-full z-30 h-16 bg-transparent">
        {/* Zigzag SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="0,3 5,2 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10 100,20 0,20"
            className="fill-current text-blue-500"
          />
        </svg>
      </div>
    );
  };
  
  export default ZigZagSeparator;
  