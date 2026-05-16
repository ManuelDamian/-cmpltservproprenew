import { Section } from "../../section/Section.tsx";
import { SITE_TEXT } from "../../../texts/textdictionary.ts";
import './services.scss';

export const Services = () => {
  return (
    <>
      <Section id='services' className='bg-services'>
        <div className='services-container'>
          <p className='title'>{SITE_TEXT.services.title}</p>
          <p className='subtitle'>{SITE_TEXT.services.subtitle}</p>
          <p className='description'>{SITE_TEXT.services.description}</p>
          <div className='services-list-container'>
            {SITE_TEXT.services.categories.map((category) => (

              <div className='category' key={category.name}>

                <img className='image' src={category.image} />
                <p className='name'>{category.name}</p>
                <p className='details'>{category.details}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}