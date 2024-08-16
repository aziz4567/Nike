
import {offer} from "../assets/images"
import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full" alt="" />
      </div>
      <div className="flex flex-1 flex-col">
      <h1 className="text-4xl lg:max-w-lg font-bold">
         <span className="text-red-500 inline-block mt-3">Special</span> Offer
        
         
          
        </h1>
        <p className="text-slate-500 lg:max-w-lg mt-4 break-words">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quidem saepe veritatis voluptatum veniam voluptas nostrum in minus molestiae amet necessitatibus esse assumenda, beatae consectetur quod reiciendis placeat velit optio!
        </p>
        <p className="mt-6 text-slate-500 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga doloremque odio at corporis asperiores repellat adipisci, officia quibusdam vitae porro, aspernatur et ducimus? Omnis suscipit accusamus ea provident esse.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now"  iconURL={arrowRight}></Button>
          <Button label="Learn more"  backgroundColor='bg-white'></Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer