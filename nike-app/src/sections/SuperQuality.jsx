import { shoe8 } from "../assets/images"
import Button from "../Components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h1 className="text-4xl lg:max-w-lg font-bold">
        We provide you <span className="text-red-500 inline-block mt-3">Super</span><br />
        
         <span className="text-red-500 inline-block mt-3">Quality</span> Shoes
          
        </h1>
        <p className="text-slate-500 lg:max-w-lg mt-4">
        Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 text-slate-500">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="view Details"></Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} width={570} height={522} className="object-contain" alt="" />
      </div>
    </section>
  )
}

export default SuperQuality