import React from 'react'
import { services } from '../constants'
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => {
        const { id, iconURL, title, description } = service
        return (
          <article key={id} className="flex flex-col items-center gap-2">
            <img src={iconURL} alt={title} className="w-16 h-16" />
            <h3 className="text-2xl font-palanquin font-bold text-center">
              {title}
            </h3>
            <p className="font-montserrat text-slate-gray text-center">
              {description}
            </p>
          </article>
        )
      })}
      
    </section>
  )
}

export default Services
