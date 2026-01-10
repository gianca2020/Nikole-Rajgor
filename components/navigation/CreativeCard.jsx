const CreativeCard = ({ title, description, imageUrl, link }) => {
  const Container = link ? 'a' : 'div'

  return (
    <Container
      href={link || undefined}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      tabIndex={0}
      className="group relative block w-full bg-transparent p-6 no-underline transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 overflow-hidden rounded-md border border-white/20 hover:border-white/40 min-h-[200px]"
    >
      {/* Image - always visible with transparency */}
      {imageUrl && (
        <div className="absolute inset-0 opacity-40 z-0">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Content - always visible */}
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-gray-100 group-focus:text-gray-100">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-300">
            {description}
          </p>
        )}
      </div>
    </Container>
  )
}

export default CreativeCard
