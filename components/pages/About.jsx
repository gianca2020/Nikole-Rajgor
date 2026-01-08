import { useEffect, useState } from 'react'
import { supabase } from '../../src/lib/supabase'
import ArticleCard from '../navigation/ArticleCard'
import SiteHeader from '../layout/SiteHeader'
import Icons from '../ui/icons'


// Supabase project URL (used to build public image URLs)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL

const About = ({ showHeader = true }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHighlights = async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('is_highlight', true)
        .order('date', { ascending: false })

      console.log('Fetched articles:', data)
      console.log('Fetch error:', error)

      if (!error && data && data.length > 0) {
        setArticles(data)
      } else {
        setArticles([])
      }

      setLoading(false)
    }

    fetchHighlights()
  }, [])

  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      {showHeader && <SiteHeader />}

      <section className="mt-12 px-8 max-w-[1100px] mx-auto text-white">
        <header className="mb-12 flex flex-col items-center text-center gap-0">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl tracking-normal leading-[1.5]" style={{ fontFamily: 'Italianno, cursive', letterSpacing: '0.08em', fontWeight: '50', color: '#F6F1E8' }}>Highlights</h1>
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-80 h-px bg-[#F6F1E8] header-line"></div>
          </div>
        </header>

        {loading ? (
          <p className="text-center text-gray-300">Loading articles...</p>
        ) : articles.length > 0 ? (
          articles.map(article => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              date={article.date}
              
              image_url={
              article.image_url
    ? article.image_url.startsWith('http')
      // 🔥 normalize bad stored URLs
      ? article.image_url.replace('/Images/', '/images/')
      // build correct URL for filename-only entries
      : `${SUPABASE_URL}/storage/v1/object/public/Images/${article.image_url}`
    : null
}

              
              url={article.url || article.link || article.href}
            />
          ))
        ) : (
          <p className="text-center text-gray-300">
            No highlighted articles yet.
          </p>
        )}
        
        <div className="flex justify-center mt-12">
          <Icons />
        </div>
      </section>
    </div>
  )
}

export default About
