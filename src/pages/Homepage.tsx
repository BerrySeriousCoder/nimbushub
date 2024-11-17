import ZigZagSeparator from "../components/com/zigzagseprator"
import { ClientBenefits } from "../components/homepage/benifit"
import { Footer } from "../components/homepage/footer"
import { HeroSection } from "../components/homepage/herosection"
import { Services } from "../components/homepage/services"


export const Homepage = () => {
    return (
        <div>
                 <HeroSection></HeroSection>
                 <Services></Services>

                 {/* <ClientBenefitSection></ClientBenefitSection> */}
                 {/* <ClientBenefits></ClientBenefits> */}
                 <Footer></Footer>
        </div>
    )
}