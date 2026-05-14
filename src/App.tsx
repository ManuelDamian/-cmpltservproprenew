import { Navbar } from './components/navbar/Navbar'
import { Section } from './components/section/Section';
import './App.scss'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <main className='main-container'>
        <Section id='home' title='Home' className='bg-home' />
        <Section id='about' title='About' className='bg-about' />
        <Section id='promise' title='Promise' className='bg-promise' />
        <Section id='services' title='Services' className='bg-services' />
        <Section id='contact' title='Contact' className='bg-contact' />
      </main>
    </div>
  )
}

export default App
