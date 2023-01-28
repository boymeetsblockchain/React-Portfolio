import "./App.css"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Service from "./components/services/Service"
import Qualifications from "./components/qualifications/Qualifications"
function App() {
  return (
    <>
    <Header/>

    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Service/>
      <Qualifications/>
    </main>
    </>
  )
}

export default App