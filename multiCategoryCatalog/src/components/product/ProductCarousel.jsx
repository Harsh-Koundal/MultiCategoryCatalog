import { useEffect, useState } from 'react'

function ProductCarousel({ item, isDarkLayout, galleryImages }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryPositions = ['object-center', 'object-left', 'object-right']

  useEffect(() => {
    setCurrentImageIndex(0)

    if (galleryImages.length <= 1) return undefined

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [galleryImages, item.itemname])

  return (
    <div className={`relative h-72 w-full overflow-hidden sm:h-[28rem] lg:h-[34rem] ${
      isDarkLayout ? 'bg-neutral-900' : 'bg-slate-100'
    }`}>
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {galleryImages.map((image, index) => (
          <img
            key={`${item.itemname}-carousel-${index}`}
            src={image}
            alt={`${item.itemname} ${index + 1}`}
            className={`h-full w-full shrink-0 object-cover ${
              galleryPositions[index % galleryPositions.length]
            }`}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ))}
      </div>

      {galleryImages.length > 1 ? (
        <>
          <button
            onClick={() =>
              setCurrentImageIndex(
                (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
              )
            }
            className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full border px-3 py-1 text-xs ${
              isDarkLayout
                ? 'border-white bg-black/70 text-white'
                : 'border-slate-300 bg-white/80 text-slate-800'
            }`}
          >
            &#8592;
          </button>
          <button
            onClick={() =>
              setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
            }
            className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full border px-3 py-1 text-xs ${
              isDarkLayout
                ? 'border-white bg-black/70 text-white'
                : 'border-slate-300 bg-white/80 text-slate-800'
            }`}
          >
            &#8594;
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {galleryImages.map((_, index) => (
              <button
                key={`${item.itemname}-dot-${index}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full border ${
                  currentImageIndex === index
                    ? isDarkLayout
                      ? 'border-white bg-white'
                      : 'border-black bg-black'
                    : isDarkLayout
                      ? 'border-white/70 bg-transparent'
                      : 'border-slate-500 bg-transparent'
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

export default ProductCarousel
