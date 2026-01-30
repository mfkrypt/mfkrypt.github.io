'use client'

import { useEffect, useState, type ImgHTMLAttributes } from 'react'

type ZoomImageProps = ImgHTMLAttributes<HTMLImageElement>

export default function ZoomImage({ className = '', style, ...props }: ZoomImageProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  const mergedClassName =
    (className ? className + ' ' : '') + 'cursor-zoom-in transition-transform duration-200'

  const alt = props.alt ?? ''

  return (
    <>
      <button
        type="button"
        className="inline-block bg-transparent p-0"
        aria-label={alt ? `Zoom image: ${alt}` : 'Zoom image'}
        onClick={() => setOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...props} alt={alt} className={mergedClassName} style={style} />
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

          <div className="relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              {...props}
              alt={alt}
              className={
                (className ? className + ' ' : '') +
                'max-h-[92vh] max-w-[96vw] rounded-md shadow-2xl'
              }
              style={{ ...(style || {}), transform: 'scale(1.08)' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
