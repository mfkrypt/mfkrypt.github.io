import EventsData from '@/data/EventsData'
import ZoomNextImage from '@/components/ZoomNextImage'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Events',
  description: 'Photos from events I have participated in.',
})

export default function EventsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Events
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A photo wall of Conferences, Meetups, and Sharings.
        </p>
      </div>

      <div className="container py-12">
        <div className="space-y-14">
          {EventsData.map((event) => (
            <section key={event.slug} id={event.slug} className="scroll-mt-24">
              <div className="space-y-2">
                <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {event.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <span>{event.date}</span>
                  {event.location && (
                    <>
                      <span aria-hidden="true">•</span>
                      <span>{event.location}</span>
                    </>
                  )}
                </div>
                {event.description && (
                  <p className="max-w-3xl text-gray-600 dark:text-gray-400">{event.description}</p>
                )}
              </div>

              <div className="mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {event.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className={`group overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900 ${
                      photo.wide ? 'sm:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div className="relative">
                      <ZoomNextImage
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={1600}
                        height={1200}
                        sizes={
                          photo.wide
                            ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw'
                            : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        }
                        className="h-auto w-full rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.01]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
