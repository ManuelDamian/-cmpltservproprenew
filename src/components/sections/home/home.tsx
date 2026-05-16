import { Section } from "../../section/Section.tsx";
import { SITE_TEXT } from "../../../texts/textdictionary.ts";
import './home.scss';

export const Home = () => {
  return (
    <>
      <Section id='home' className='bg-home'>
        <img className='main-logo' src="/Complete_PNG.avif" />
        <p className='slogan'>{SITE_TEXT.home.slogan}</p>
        <p className='service-line'>{SITE_TEXT.home.serviceLine}</p>
        <img src="/home.avif" />
        <p className='welcome'>{SITE_TEXT.home.welcome}</p>
        <p className='subtitle'>{SITE_TEXT.home.subtitle}</p>
        <p className='description'>{SITE_TEXT.home.description}</p>
      </Section>
    </>
  )
}