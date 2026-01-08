import Navbar from './Navbar'

const Resume = () => {
  return (
    <>
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

      <section className="px-8 max-w-[1100px] mx-auto">
        <header className="mt-6 mb-12 flex flex-col items-center text-center">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl tracking-normal leading-[1.5]" style={{ fontFamily: 'Italianno, cursive', letterSpacing: '0.08em', fontWeight: '50', color: '#F6F1E8' }}>Resume</h1>
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-80 h-px bg-[#F6F1E8] header-line"></div>
          </div>
        </header>

        <div className="mb-12 text-white">
          <iframe 
            src="/Nikole_resume.pdf" 
            className="w-full h-screen rounded border border-gray-600"
            title="Nikole Resume"
          />
        </div>
      </section>
    </>
  )
}

export default Resume
