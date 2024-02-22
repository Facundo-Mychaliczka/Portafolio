import { PageWrapper } from "./assets/PageWrapper/PageWrapper"
import Hero from "./assets/components/Hero/Hero"
import Navbar from "./assets/components/Navbar/Navbar"
import Portfolio from "./assets/components/Portfolio/Portfolio"

function App() {

  return (
    <>
    <PageWrapper>
      <Navbar/>
      <Hero/> 
      <Portfolio/>
    </PageWrapper>
      
    </>
  )
}

export default App
