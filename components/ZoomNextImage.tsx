"use client"

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

  const imageClassName = (className ? className + ' ' : '') + 'transition-transform duration-200'

  const resolvedSrc = useMemo(() => {
    if (typeof src !== 'string') return src
    // Keep absolute/remote URLs untouched
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return src
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
      <span
        className="inline-block cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <NextImage
          {...rest}
          src={resolvedSrc}
          alt={alt}
          style={style}
          className={imageClassName}
        />
      </span>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          {typeof resolvedSrc === 'string' ? (
            <img
              src={resolvedSrc}
              alt={alt}
              className="max-h-[92vh] max-w-[96vw] rounded-md shadow-2xl"
              style={{ transform: 'scale(1.08)' }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div
              className="relative max-h-[92vh] max-w-[96vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <NextImage
                {...rest}
                src={resolvedSrc}
                alt={alt}
                className={(className ? className + ' ' : '') + 'rounded-md shadow-2xl'}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}
