import { Section } from "../../section/Section"
import { SITE_TEXT } from "../../../texts/textdictionary.ts";
import './promises.scss';

export const Promises = () => {
  return (
    <>
      <Section id='promise' className='bg-promise'>
        <div className='promise-container'>
          <div className='promise-text'>
            <p className='header'>{SITE_TEXT.promise.header}</p>
            {SITE_TEXT.promise.items.map((item) => (
              <div className='item' key={item.title}>
                <p className='title'>{item.title}</p>
                <p className='text'>{item.text}</p>
              </div>
            ))}
          </div>
          <div className='promise-img'>
            <img src="/promise.avif" />
          </div>
        </div>
      </Section>
    </>
  )
}