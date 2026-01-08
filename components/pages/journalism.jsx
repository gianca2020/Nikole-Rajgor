import { useEffect, useState } from 'react'
import { supabase } from '../../src/lib/supabase'
import ArticleCard from '../navigation/ArticleCard'
import SiteHeader from '../layout/SiteHeader'

const Journalism = ({ showHeader = true }) => {
  const [articles, setArticles] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await supabase
        .from('articles')
        .select('*')
        .eq('is_published', true)
        .order('date', { ascending: false })

      setArticles(data || [])
    }

    fetchArticles()
  }, [])

  return (
    <>
      {showHeader && <SiteHeader />}

      <section className="px-8 max-w-[1100px] mx-auto">
        <header className="mt-12 mb-6 flex flex-col items-center text-center">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl tracking-normal leading-[1.5]" style={{ fontFamily: 'Italianno, cursive', letterSpacing: '0.08em', fontWeight: '50', color: '#F6F1E8' }}>Publications</h1>
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-80 h-px bg-[#F6F1E8] header-line"></div>
          </div>
        </header>

        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-96 px-4 py-2 bg-[#2F2F2F] text-white placeholder-gray-400 rounded border border-gray-600 focus:border-gray-400 focus:outline-none font-Montserrat text-sm"
          />
        </div>

        {articles
          .filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(a => (
          <ArticleCard
            key={a.id}
            title={a.title}
            description={a.description}
            date={a.date}
            image_url={a.image_url}
            url={a.url || a.link || a.href}
          />
        ))}
      </section>
    </>
  )
}

export default Journalism
