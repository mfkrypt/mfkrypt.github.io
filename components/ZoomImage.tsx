"use client"

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

  return (
    <>
      <img
        {...props}
        className={mergedClassName}
        style={style}
        onClick={(e) => {
          props.onClick?.(e)
          setOpen(true)
        }}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <img
            {...props}
            className={(className ? className + ' ' : '') + 'max-h-[92vh] max-w-[96vw] rounded-md shadow-2xl'}
            style={{ ...(style || {}), transform: 'scale(1.08)' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
