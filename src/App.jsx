import { PageWrapper } from "./assets/PageWrapper/PageWrapper"
import Hero from "./assets/components/Hero/Hero"
import Navbar from "./assets/components/Navbar/Navbar"
import Portfolio from "./assets/components/Portfolio/Portfolio"
import Skillset from "./assets/components/Skillset/Skillset"
import ContactSection from "./assets/components/ContactSection/ContactSection"
import Footer from "./assets/components/Footer/Footer"

function App() {

  return (
    <>
    <PageWrapper>
      <Navbar/>
      <Hero/> 
      <Portfolio/>
      <Skillset/>
      <ContactSection/>
      <Footer/>
    </PageWrapper>
      
    </>
  )
}

export default App
