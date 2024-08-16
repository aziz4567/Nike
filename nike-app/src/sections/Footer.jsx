
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a>
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Findyour perfect size In store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((iitem)=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">

                <img src={iitem.src} width={24} height={24} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section)=>(
              <div key={section}>
                <h4 className="text-white leading-normal text-2xl font-medium mb-6 mt-4">{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li className="text-white mt-3 text-base leading-normal" key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
    </footer>
  )
}

export default Footer