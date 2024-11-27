import { Button } from "@mui/material";
import newGraph from '../../assets/newgraph.png';
import notepad from '../../assets/notepad.png';
import marketing from '../../assets/marketing.png';
import rocket from '../../assets/startup.png';
import mainLogo from '../../assets/mainlogo.png';

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center   items-center bg-[#021122]">
        <div 
          style={{ backgroundImage: `url(/footersection.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }} 
          className="lg:h-[800px] h-[300px]"
        >
          <div className="flex lg:mt-10 items-center relative flex-col text-center">
            <div className="lg:text-5xl text-xl font-antontwo bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Elevate Your Business with NimbusHub?
            </div>
            <div className="lg:text-2xl text-sm lg:m-5 my-3 font-robotoCondensed text-white">
              Unlock the full potential of your software architecture with scalable, <br className="hidden lg:block" /> 
              efficient, and high-performance solutions tailored to your needs.
            </div>

            <div className="lg:m-10 flex flex-col items-center">
              <Button sx={{ backgroundColor: 'cyan', color: 'black', padding: '10px' , '@media (max-width : 600px)' : {padding : '4px 8px' , fontSize : '10px' }  }} variant="contained">START FREE TRIAL</Button>
              <div className="text-cyan-300 text-sm lg:text-base mt-2 lg:mt-5 ">Request demo</div>
            </div>

            <img 
              className="absolute lg:h-44 h-14 lg:left-52 left-10  lg:top-20 -top-14 lg:block"
              src={newGraph}
              alt="newGraphImage"
            />
            <img 
              className="absolute lg:h-36 h-14 lg:right-72 right-10 -top-16  lg:top-40  lg:block"
              src={notepad}
              alt="notepadImage"
            />
            <img 
              className="absolute lg:h-36 h-12 lg:top-72 top-28 lg:left-96 right-12 lg:block"
              src={marketing}
              alt="marketingImage"
            />
            <img 
              className="absolute  lg:h-40 h-10 lg:top-80 top-28  lg:right-96 left-16 lg:block"
              src={rocket}
              alt="rocketImage"
            />
          </div>
        </div>

        <div className="lg:h-96 flex  lg:flex-row justify-between pb-10 w-full text-white lg:px-16 px-3 py-8">
          <div className="flex flex-col justify-between lg:py-10 gap-5  lg:text-left">
            <div>
              <img className="lg:h-24 h-16 lg:mx-0" src={mainLogo} alt="logo" />
              <span className="block mt-2 lg:text-base text-xs">Designing Systems Built for Impact and Longevity.</span>
            </div>
            <div>
              <div>icon</div>
              <div className="lg:text-base text-xs" >@2024 All Rights reserved</div>
            </div>
          </div>
          <div className="gap-5 flex flex-col font-oswald lg:text-lg">
            <div className="text-center lg:text-left">COMPANY</div>
            <div className="flex flex-col gap-2 font-roboto text-xs lg:text-base text-center lg:text-left">
              <div>Expert Testimonials</div>
              <div>Customer Testimonials</div>
              <div>Twitter</div>
              <div>Email</div>
              <div>Support</div>
            </div>
          </div> 
          
          <div className="gap-5 flex flex-col font-oswald lg:text-lg">
            <div className="text-center lg:text-left">KNOW MORE</div>
            <div className="flex flex-col gap-2 font-roboto  text-xs lg:text-base text-center lg:text-left">
              <div>About us</div>
              <div>Terms and policies</div>
              <div>Pricing</div>
              <div className="lg:hidden block" >Demo</div>
            </div>
          </div>
          <div className=" hidden  gap-1 lg:gap-5 lg:flex flex-col font-oswald text-sm lg:text-lg">
            <div className="text-center  lg:text-left">GET STARTED</div>
            <div className="flex flex-col gap-2 font-roboto text-sm lg:text-base text-center lg:text-left">
              <div>Demo</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
