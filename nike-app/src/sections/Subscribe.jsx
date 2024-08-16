
import Button from "../Components/Button"
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-sans font-bold">
        Sign up for <span className="text-red-500">Updates</span>
      </h3>
      <div className="lg:max-w-[40%]  flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-500 rounded-full w-full">
        <input type="text"  className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full"/>
        <div className=" flex max-sm:justify-end items-center max-sm:w-full">
        <Button label="Sign up"></Button>
        </div>
      </div>
      
    </section>
  )
}

export default Subscribe