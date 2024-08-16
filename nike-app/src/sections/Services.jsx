import React from 'react'
import { services } from '../constants/index'
import CServiceCard from '../Components/CServiceCard'
const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-16'>
        {services.map((service)=>(
            <CServiceCard key={service.label} {...service}></CServiceCard>
        ))}
    </section>
  )
}

export default Services
