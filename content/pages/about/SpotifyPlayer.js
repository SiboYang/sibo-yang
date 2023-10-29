import * as React from "react"

// Size presets, defined by Spotify
const sizePresets = {
  normal: {
    width: `75%`,
    height: `352px`,
  },
  compact: {
    width: `75%`,
    height: `152px`,
  },
}

function SpotifyPlayer({ playlistUri = `4nrUjIsQY3UjtNqtd0u9Q2`, size = `normal` }) {
  return (
    <iframe
      title="Spotify"
      style={{
        borderRadius: `12px`,
        margin: 'auto',
        display: 'block'
      }}
      src={`https://open.spotify.com/embed/playlist/${playlistUri}?theme=0`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  )
}

export default SpotifyPlayer
