const ArticleCard = ({ title, description, date, image_url, imageUrl, url, link, href }) => {
  const resolvedImage = image_url || imageUrl
  const resolvedUrl = url || link || href
  const Container = resolvedUrl ? 'a' : 'div'

  return (
    <Container
      href={resolvedUrl || undefined}
      target={resolvedUrl ? '_blank' : undefined}
      rel={resolvedUrl ? 'noopener noreferrer' : undefined}
      className="group block w-full border-b border-white/25 bg-transparent px-1 py-6 no-underline transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-6">
        <div className="flex-1 text-white pt-0 order-2 md:order-1">
          <h2 className="text-lg md:text-2xl font-semibold tracking-tight text-white group-hover:text-[#F6F1E8]">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#F6F1E8]">
            {description}
          </p>
          <p className="mt-4 mb-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6F1E8 ]">
            {date}
          </p>
        </div>

        <div className="relative min-h-[120px] w-full md:min-h-[100px] md:w-[180px] shrink-0 overflow-hidden rounded-sm bg-gradient-to-br from-gray-200 to-gray-300 order-1 md:order-2 md:self-stretch md:-mb-12">
          {resolvedImage ? (
            <img
              src={resolvedImage}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 grid place-items-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F6F1E8]"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(225deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(315deg, rgba(0,0,0,0.05) 25%, #f3f4f6 25%)',
                backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                backgroundSize: '20px 20px',
                backgroundRepeat: 'repeat'
              }}
            >
              Image
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default ArticleCard
