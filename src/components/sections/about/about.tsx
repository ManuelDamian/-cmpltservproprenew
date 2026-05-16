import { Section } from "../../section/Section.tsx";
import { SITE_TEXT } from "../../../texts/textdictionary.ts";
import './about.scss';

export const About = () => {
  return (
    <>
      <Section id='about' className='bg-about'>
        <div className='about-container'>
          <h3 className='section-title'>{SITE_TEXT.about.sectionTitle}</h3>
          <img className='about-img' src="/about.avif" />
          <p className='title'>{SITE_TEXT.about.title}</p>
          <p className='description'>{SITE_TEXT.about.description}</p>
        </div>
      </Section>
    </>
  )
}