'use client'

const YouTubeEmbed = ({ videoId, title }) => (
  <iframe
    width="100%"
    height="498"
    src={`https://www.youtube.com/embed/${videoId}`}
    title={title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
)

export default YouTubeEmbed
