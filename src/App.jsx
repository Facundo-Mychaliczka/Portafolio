import { PageWrapper } from "./assets/PageWrapper/PageWrapper"
import Hero from "./assets/components/Hero/Hero"
import Navbar from "./assets/components/Navbar/Navbar"
import Portfolio from "./assets/components/Portfolio/Portfolio"
import Skillset from "./assets/components/Skillset/Skillset"
import ContactSection from "./assets/components/ContactSection/ContactSection"
import Footer from "./assets/components/Footer/Footer"
import { BlurDisplay } from "./assets/GlobalStyles"
import { useDispatch, useSelector } from "react-redux"
import { setHiddenBlur } from "./redux/language/languageSlice"
import AboutMe from "./assets/components/AboutMe/AboutMe"


function App() {
  const dispatch = useDispatch()

  const isHidden = useSelector((state) => state.language.blurHidden)

  return (
    <>
    <PageWrapper>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skillset/>
      <Portfolio/>
      <ContactSection/>
      <Footer/>
      <BlurDisplay hidden={isHidden} onClick={() => dispatch(setHiddenBlur())}/>
    </PageWrapper>
      
    </>
  )
}

export default App
