import './App.css'
import { BannerSection } from './components/BannerSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { VideoSection } from './components/VideoSection'

function App() {

  return (
    <>
      <Header />
      <VideoSection />
      <BannerSection/>
      <Footer />
    </>
  )
}

export default App
