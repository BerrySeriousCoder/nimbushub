import AboutSectionCard from "../components/ui/about"


export const About = () => {
    return (
        <div style={{ backgroundImage: `url(/pricingbg.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }} 
        className="flex justify-center  items-center  lg:pb-32 pb-20" >
            
            <AboutSectionCard></AboutSectionCard>

        </div>
    )
}