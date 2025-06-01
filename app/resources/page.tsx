import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Useful tools, references, and learning materials',
}

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Security Tools',
      items: [
        {
          title: 'Burp Suite',
          description: 'An integrated platform for performing security testing of web applications',
          link: 'https://portswigger.net/burp',
        },
        {
          title: 'Wireshark',
          description: 'The worlds foremost and widely-used network protocol analyzer',
          link: 'https://www.wireshark.org/',
        },
      ],
    },
    {
      category: 'Learning Platforms',
      items: [
        {
          title: 'TryHackMe',
          description: 'Learn cybersecurity through hands-on exercises and labs',
          link: 'https://tryhackme.com',
        },
        {
          title: 'HackTheBox',
          description: 'Cybersecurity training platform with real-world scenarios',
          link: 'https://www.hackthebox.com',
        },
      ],
    },
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resources
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A curated collection of useful tools and learning resources
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-12">
            {resources.map((section) => (
              <div key={section.category} className="space-y-6">
                <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {section.category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg dark:hover:shadow-gray-800 transition duration-200 hover:-translate-y-1"
                    >
                      <h3 className="text-xl font-bold leading-8 tracking-tight text-primary-500">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 