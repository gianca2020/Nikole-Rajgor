import { useEffect, useState } from 'react'
import { supabase } from '../../src/lib/supabase'
import CreativeCard from '../navigation/CreativeCard'
import Navbar from './Navbar'

const Creative = () => {
  const [creatives, setCreatives] = useState([])

  useEffect(() => {
    const fetchCreatives = async () => {
      const { data, error } = await supabase
        .from('creatives')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error) setCreatives(data)
      else console.error(error)
    }

    fetchCreatives()
  }, [])

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

      <section className="px-8 max-w-[1100px] mx-auto text-white min-h-screen mt-8">
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl tracking-normal leading-[1.5]" style={{ fontFamily: 'Italianno, cursive', letterSpacing: '0.08em', fontWeight: '50', color: '#F6F1E8' }}>Creative</h1>
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-80 h-px bg-[#F6F1E8] header-line"></div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creatives.map((c) => (
            <CreativeCard
              key={c.id}
              title={c.title}
              description={c.role_description}
              imageUrl={c.img_url}
              link={c.link}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Creative
