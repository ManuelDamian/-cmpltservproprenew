import { Navbar } from './components/navbar/Navbar'
import { Section } from './components/section/Section';
import { SITE_TEXT } from './texts/textdictionary';
import './App.scss'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <main className='main-container'>
        <Section id='home' className='bg-home'>

          <img className='main-logo' src="/Complete_PNG.avif" />
          <p className='slogan'>{SITE_TEXT.home.slogan}</p>
          <p className='service-line'>{SITE_TEXT.home.serviceLine}</p>
          <img src="/home.avif" />
          <p className='welcome'>{SITE_TEXT.home.welcome}</p>
          <p className='subtitle'>{SITE_TEXT.home.subtitle}</p>
          <p className='description'>{SITE_TEXT.home.description}</p>
        </Section>
        <Section id='about' className='bg-about'>
          <div className='about-container'>
            <h3 className='section-title'>{SITE_TEXT.about.sectionTitle}</h3>
            <img className='about-img' src="/about.avif" />
            <p className='title'>{SITE_TEXT.about.title}</p>
            <p className='description'>{SITE_TEXT.about.description}</p>
          </div>
        </Section>
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
      </main>
    </div>
  )
}

export default App
