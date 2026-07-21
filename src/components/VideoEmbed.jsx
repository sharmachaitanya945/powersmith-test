import { useState } from 'react'

// Click-to-play YouTube facade: shows the thumbnail until pressed, so the heavy
// player script only loads when someone actually wants to watch. Reusable — the
// homepage uses it beside the savings copy, and the About/Residential pages will
// use it for the "PowerSmith Difference" videos.
export default function VideoEmbed({
  videoId,
  title = 'PowerSmith Energy video',
  className = '',
}) {
  const [play, setPlay] = useState(false)

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl border border-line/10 bg-mist shadow-xl shadow-navy/10 ${className}`}
    >
      {play ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlay(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/15">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg transition group-hover:scale-110 sm:h-20 sm:w-20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 translate-x-0.5 sm:h-9 sm:w-9">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
