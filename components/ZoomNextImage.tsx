'use client'

import { useEffect, useMemo, useState } from 'react'
import NextImage, { type ImageProps } from 'next/image'

// In Client Components, `process` may be undefined at runtime.
// Only `NEXT_PUBLIC_*` env vars are safe to read in the browser.
const basePath =
  typeof process !== 'undefined'
    ? process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || ''
    : ''

export default function ZoomNextImage({ className = '', style, src, alt, ...rest }: ImageProps) {
  const [open, setOpen] = useState(false)

  const safeAlt = alt ?? ''

  const imageClassName = (className ? className + ' ' : '') + 'transition-transform duration-200'

  const resolvedSrc = useMemo(() => {
    if (typeof src !== 'string') return src
    // Keep absolute/remote URLs untouched
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:'))
      return src
    return `${basePath}${src}`
  }, [src])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="inline-block cursor-zoom-in bg-transparent p-0"
        aria-label={safeAlt ? `Zoom image: ${safeAlt}` : 'Zoom image'}
        onClick={() => setOpen(true)}
      >
        <NextImage
          {...rest}
          src={resolvedSrc}
          alt={safeAlt}
          style={style}
          className={imageClassName}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />

          {typeof resolvedSrc === 'string' ? (
            <div className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolvedSrc}
                alt={safeAlt}
                className="max-h-[92vh] max-w-[96vw] rounded-md shadow-2xl"
                style={{ transform: 'scale(1.08)' }}
              />
            </div>
          ) : (
            <div className="relative z-10 max-h-[92vh] max-w-[96vw]">
              <NextImage
                {...rest}
                src={resolvedSrc}
                alt={safeAlt}
                className={(className ? className + ' ' : '') + 'rounded-md shadow-2xl'}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}
