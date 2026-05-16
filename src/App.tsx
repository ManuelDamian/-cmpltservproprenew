import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/sections/home/home';
import './App.scss'
import { About } from './components/sections/about/about';
import { Services } from './components/sections/services/services';
import { Promises } from './components/sections/promises/promises';
import { Contact } from './components/sections/contact/contact';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <main className='main-container'>
        <Home />
        <About />
        <Services />
        <Promises />
        <Contact />
      </main>
    </div>
  )
}

export default App
