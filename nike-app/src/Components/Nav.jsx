import {hamburger} from "../assets/icons"
import {headerLogo} from "../assets/images"
const Nav = () => {
  return (
    <header className="padding-x z-10 py-8 absolute w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                <li >
                    <a href="" className="font-montserrat leading-normal text-lg text-slate-500">Home</a>
                </li>
                <li>
                    <a href="" className="font-montserrat leading-normal text-lg text-slate-500">About US</a>
                </li>
                <li>
                    <a href="" className="font-montserrat leading-normal text-lg text-slate-500">Products</a>
                </li>
                <li>
                    <a href="" className="font-montserrat leading-normal text-lg text-slate-500">Contact US</a>
                </li>
                
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt="" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav