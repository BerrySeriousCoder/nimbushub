import { Button } from '@mui/material';
import arrow from '../../assets/zigzagarrow.png';
import arc from '../../assets/arctwo.jpg';
import arrowtwo from '../../assets/gen.gif';
import cloud from '../../assets/cloud.gif';
import bolt from '../../assets/bolt.gif';
import heroSectionBg from '../../svgs/herosection.svg';

export const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroSectionBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="h-[600px] sm:h-[1000px] lg:h-[1200px] flex flex-col items-center pt-9 sm:pt-20 lg:pt-24 text-center"
    >
      <div className="font-antontwo text-xl sm:text-6xl lg:text-8xl text-[#0d1639]">
        <span className="text-[#1b52cd]">Architecting</span> Scalable{' '}
        <img
          className="h-8 sm:h-16 lg:h-28 inline-flex"
          src={arrow}
          alt="arrow"
        />{' '}
        Solutions <br /> for Limitless Growth
      </div>

      <div className="font-roboto text-sm sm:text-xl lg:text-2xl mt-3 sm:mt-4 lg:mt-5">
        At NimbusHub, we help small businesses and startups <br className='hidden lg:block'  /> engineer
        software  architectures that are secure, efficient, and built to scale.
        Ready to level up?
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <Button
          sx={{
            backgroundColor: '#face55',
            fontFamily: 'roboto',
            color: 'black',
            boxShadow: '10px 8px 10px rgba(0, 0, 0, 0.3)',
            padding: '10px',
            '@media (max-width: 600px)' : {
              fontSize : '10px' ,
               padding : '3px 6px' ,
               height : '2rem'}
          }}
          variant="contained"
        >
          Schedule a Free Consultation
        </Button>
        <div>
          <img className="h-12 sm:h-16 lg:h-24 z-30 absolute ml-20 sm:ml-40 lg:ml-60" src={bolt} alt="bolt" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <div>
          <img className="h-16 sm:h-20 lg:h-28 absolute  z-50 right-20 bottom-56 sm:left-40 lg:left-80 mt-20 sm:mt-40 lg:mt-56" src={cloud} alt="cloud" />
        </div>
        <img
          className="h-52 sm:h-40 lg:h-[50%] z-20 border-4 sm:border-6 lg:border-8 border-black rounded"
          src={arc}
          alt="arcimage"
        />
        <div>
          <img className="h-20 sm:h-28 lg:h-36 absolute" src={arrowtwo} alt="arrowtwo" />
        </div>
      </div>
    </div>
  );
};
