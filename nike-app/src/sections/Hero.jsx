
import Button from "../Components/Button"
import {arrowRight} from "../assets/icons"
import { statistics,shoes } from "../constants/index"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg,setBigShoeImg]=useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl font-sans text-red-500">Our Summer Collections</p>
      <h1 className="text-8xl font-sans mt-10 max-sm:text-[72px] max-sm:leading-[82] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The new arrival</span><br />
        <span className="text-red-500 inline-block mt-3">Nike</span>
        Shoes
        </h1>
        <p className="text-slate-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals,quality,comfort, and innovation for your active life .
        </p>
        <Button label="Shop now" iconURL={arrowRight}></Button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20  gap-16">
            {statistics.map((stat,index)=>(
              <div key={stat.label}>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="leading-7 text-slate-500">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-blue-100 bg-center" >
        <img src={bigShoeImg} alt="" width={610} height={500} className="object-contain relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]  max-sm:px-6">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}></ShoeCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero