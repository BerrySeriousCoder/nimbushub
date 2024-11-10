import { Button } from '@mui/material'
import arrow from '../../assets/zigzagarrow.png'
import arc from '../../assets/arctwo.jpg'
import arrowtwo from '../../assets/gen.gif'
import cloud from '../../assets/cloud.gif'
import bolt from '../../assets/bolt.gif'

export const HeroSection = () => {
    return (
        <div className="h-svh bg-[#73e8e7] flex flex-col items-center pt-24 text-center " >
                        <div className="font-antontwo text-8xl text-[#0d1639] " >
                        <span className="text-[#1b52cd]" >Architecting</span>  Scalable <img className='h-28 inline-flex'  src={arrow} alt='arrow' />  Solutions <br /> for Limitless Growth
                        </div>
                        <div className='font-roboto text-2xl mt-5' >
                        At NimbusHub, we help small businesses and startups  <br />  engineer  software architectures that are secure, efficient, and built to scale. Ready to level up?
                        </div>
                        <div className='p-8' >
                        <Button  sx={{backgroundColor : '#face55', fontFamily : 'roboto' , color : 'black' , boxShadow : '10px 8px 10px rgba(0, 0, 0, 0.3)' , padding : '10px' }} variant="contained">Schedule a Free Consultation</Button>
                        <div>
                                  <img className='h-24 absolute ml-60   ' src={bolt} alt='arrowtwo' />
                            </div>
                        </div> 

                        <div className='flex gap-5' >
                            <div>
                                  <img className='h-28 absolute  left-80 mt-56' src={cloud} alt='arrowtwo' />
                            </div>
                               <img className='h-1/2 border-8 border-black rounded ' src={arc} alt='arcimage' />
                               <div>
                                  <img className='h-36 absolute  ' src={arrowtwo} alt='arrowtwo' />
                            </div>
                        </div>
        </div>
    )
}