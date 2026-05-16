import { Section } from "../../section/Section.tsx"
import { SITE_TEXT } from "../../../texts/textdictionary.ts"
import './contact.scss';

export const Contact = () => {
  return (
    <>
      <Section id='contact' className='bg-contact' >
        <div className='contact-container'>
          <p className='title'>{SITE_TEXT.contact.title}</p>
          <p className='subtitle'>{SITE_TEXT.contact.subtitle}</p>
          <p className='description'>{SITE_TEXT.contact.description}</p>
          <p className='phone'>{SITE_TEXT.contact.phone}</p>
          <p className='email'>{SITE_TEXT.contact.email}</p>
          <p className='address'>{SITE_TEXT.contact.address}</p>
          <p className='license'>{SITE_TEXT.contact.license}</p>
          <p className='copyright'>{SITE_TEXT.contact.copyright}</p>
        </div>
      </Section>

    </>
  )
}