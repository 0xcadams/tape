import { THUMBNAIL_GENERATE_COUNT } from '@components/Create/ChooseThumbnail'
import React, { useMemo } from 'react'

const ThumbnailsShimmer = () => {
  const thumbnails = useMemo(() => Array(THUMBNAIL_GENERATE_COUNT).fill(1), [])

  return (
    <>
      {thumbnails.map((e, i) => (
        <div
          key={`${e}_${i}`}
          className="tape-border aspect-[16/9] h-full w-full animate-pulse rounded-md"
        >
          <div className="h-full rounded-md bg-gray-200 dark:bg-gray-800" />
        </div>
      ))}
    </>
  )
}

export default ThumbnailsShimmer
