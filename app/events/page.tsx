import EventsData from '@/data/EventsData'
import ZoomNextImage from '@/components/ZoomNextImage'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Events',
  description: 'Photos from events I have participated in.',
})

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

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

      <div className="py-12">
        <div className="space-y-16">
          {EventsData.map((event) => (
            <section key={event.slug} id={event.slug} className="scroll-mt-24">
              {/* Event header */}
              <div className="mb-6 border-l-2 border-primary-500 pl-4">
                <p className="mb-1 text-sm font-medium text-primary-500">
                  {formatDate(event.date)}
                  {event.location && (
                    <span className="text-gray-400 dark:text-gray-500">
                      {' '}
                      &middot; {event.location}
                    </span>
                  )}
                </p>
                <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-gray-100">
                  {event.title}
                </h2>
                {event.description && (
                  <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                )}
              </div>

              {/* Photo grid — 2 cols on sm+, masonry-style with portrait spanning 2 rows */}
              <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
                {event.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className={`group overflow-hidden rounded-xl border border-gray-200/50 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700/40 ${
                      photo.portrait ? 'row-span-2' : ''
                    }`}
                  >
                    <div
                      className={`overflow-hidden ${
                        photo.portrait ? 'aspect-[3/4]' : 'aspect-[4/3]'
                      }`}
                    >
                      <ZoomNextImage
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={1200}
                        height={photo.portrait ? 1600 : 900}
                        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 384px, 320px"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
