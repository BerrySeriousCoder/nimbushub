import { Button } from '@mui/material';
import logo from '../../assets/mainlogoblue.png';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ScheduleMeetingPopup } from '../ui/formcard';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen , setIsOpen] = useState(false)
  
  const navigate = useNavigate()
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center bg-[#73e8e7] px-4">
      <div onClick={() => navigate('/')} className="text-xl">
        <img className=" h-10 lg:h-20" src={logo} alt="logo" />
      </div>

      <div className="hidden lg:flex items-center w-80 justify-between text-blue-950 cursor-pointer">
        <div onClick={() => navigate('/')}  >Home</div>
        <div onClick={() => navigate('/pricing')} >Pricing</div>
        <div onClick={() => navigate('/about')} >About</div>
        {/* <div>Experts</div> */}
      </div>


      <div>
      <Button  onClick={() => setIsOpen(true)}  sx={{ backgroundColor: 'cyan', color: 'black', padding: '10px' , '@media (max-width : 600px)' : {padding : '4px 8px' , fontSize : '10px' }  }} variant="contained">START DEMO TRIAL</Button>
            <ScheduleMeetingPopup  isOpen={isOpen} onClose={ () => setIsOpen(false)} ></ScheduleMeetingPopup>
      </div>

     

      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-blue-950">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
       <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
        initial={{ opacity: 0, x: -200 }} 
        animate={{ opacity: 1, x: 0 }}  
        exit={{ opacity: 0, x: 200  }}   
        transition={{ duration: 0.3 , ease: 'easeInOut'}} 
        className="lg:hidden flex flex-col z-50 items-center absolute bg-[#73e8e7] top-16 left-0 w-full py-4">
          <div onClick={() => {navigate('/')
            setIsMobileMenuOpen(false)
          }} className="py-2">Home</div>
          <div onClick={() => {navigate('/pricing') 
            setIsMobileMenuOpen(false) }} className="py-2">Pricing</div>
          <div  onClick={() => {navigate('/about')
            setIsMobileMenuOpen(false)
          }} className="py-2">About</div>
          {/* <div className="py-2">Experts</div> */}
          <div className="py-2">
            <Button sx={{ height: '3rem', color: '#133E87' }} variant="outlined">
              Request Demo
            </Button>
          </div>
        </motion.div>
        
      )}
      </AnimatePresence>
    </div>
  );
};
