import PricingCards from "../components/ui/pricingcard"


export const Pricing = () => {
    return (
        <div   style={{ backgroundImage: `url(/pricingbg.svg)`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%' }} 
         className="flex justify-center items-center lg:pb-32 pb-32" >
              
              <div className="flex justify-between items-center" > 


                  <PricingCards></PricingCards>

              </div>
        </div>
    )
}