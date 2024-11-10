import { Button } from '@mui/material'
import logo from '../../assets/nimbuslogo.png'

export const Navbar = () => {
    return (
        <div className='flex justify-between px-4 items-center bg-[#73e8e7] ' >
               <div className='text-xl ' >
                        {/* <img className='h-16' src={logo} alt="logo" /> */}
                        NIMBUSHUB
               </div>
               <div className='flex items-center w-96 justify-between text-blue-950' >
                         <div>
                            Home
                         </div>
                         <div>
                            Pricing
                         </div>
                         <div>
                            About
                         </div>
                         <div>
                            Experts
                         </div>
               </div>
               <div>
               <Button sx={{height: '3rem', color : '#133E87'}} variant="outlined">Request Demo</Button>
               </div>
        </div>
    )
}