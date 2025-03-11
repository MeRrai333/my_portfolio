import './App.css'
import NavBar from './components/nav'
import AboutMe from './sections/aboutMe'
import Contact from './sections/contact'
import Home from './sections/home'
import Projects from './sections/projests'
import TechStacks from './sections/techStacks'

function App() {

  return (
    <>
      <Home />
      <NavBar />
      <AboutMe />
      <TechStacks />
      <Projects />
      <Contact />
    </>
  )
}

export default App
