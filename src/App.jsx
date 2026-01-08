import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import About from '../components/pages/About.jsx'
import Journalism from '../components/pages/journalism.jsx'
import Resume from '../components/pages/Resume.jsx'
import Creative from '../components/pages/creative.jsx'
import Navbar from '../components/pages/Navbar.jsx'

const JournalismHero = () => (
  <section className="w-full bg-[#1F1F1F]">
    <div className="w-full flex justify-center px-6 py-14">
      <div className="flex flex-col items-center">
        <h1
          className="text-[64px] md:text-[90px] lg:text-[96px] text-[#F6F1E8] font-bold text-center tracking-[0.09em]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          NIKOLE RAJGOR
        </h1>

        <h2 className="text-[16px] md:text-[18px] text-[#F6F1E8] font-normal text-center tracking-[0.3em]">
          JOURNALIST
        </h2>

        <div className="mt-10">
          <Navbar variant="dark" />
          {/**<div className="mt-6 h-px w-full bg-[#F6F1E8]"></div> */}
        </div>
      </div>
    </div>
  </section>
)

const AppContent = () => {
  const location = useLocation()
  const isJournalism = location.pathname === '/journalism'
  const isCreative = location.pathname === '/creative'
  const isResume = location.pathname === '/resume'

  return (
    <main className='bg-[#1F1F1F]'>
      {isJournalism ? <JournalismHero /> : isCreative ? null : isResume ? null : <SiteHeader />}
      <Routes>
        <Route path="/" element={<About showHeader={false} />} />
        <Route path="/journalism" element={<Journalism showHeader={false} />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
