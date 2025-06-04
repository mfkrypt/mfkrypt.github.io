import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Useful tools, references, and learning materials',
}

export default function ResourcesPage() {
  const resources = [
    {
      category: 'All Rounder',
      items: [
        {
          title: "Jorian Woltjer's notes",
          description: 'Security testing guide',
          link: 'https://book.jorianwoltjer.com/',
        },
        {
          title: "Jorian Woltjer's blog",
          description: 'More in depth writeups',
          link: 'https://book.jorianwoltjer.com/',
        },
        {
          title: "The Hacker Recipes",
          description: 'More security testing guide',
          link: 'https://www.thehacker.recipes/',
        },
      ],
    },
    {
      category: 'Offensive Security',
      items: [
        {
          title: 'ired.team Notes',
          description: 'Red Team Guide',
          link: 'https://www.ired.team/offensive-security',
        },
      ],
    },
    {
      category: 'Active Directory',
      items: [
        {
          title: 'NetExec',
          description: 'NetExec Cheatsheet',
          link: 'https://www.netexec.wiki/',
        },
        {
          title: 'ired.team Notes',
          description: 'Kerberos Cheatsheet',
          link: 'https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse',
        },
        {
          title: 'InternalAllTheThings',
          description: 'Internal Cheatsheet',
          link: 'https://swisskyrepo.github.io/InternalAllTheThings/cheatsheets/mimikatz-cheatsheet/',
        },
        {
          title: 'PopLabSec',
          description: 'PT Guide for AD & Linux',
          link: 'https://www.poplabsec.com/sitemap/',
        },
        {
          title: 'AD Mindmap',
          description: 'Orange Cyberdefense Active Directory Mindmap',
          link: 'https://orange-cyberdefense.github.io/ocd-mindmaps/img/mindmap_ad_dark_classic_2025.03.excalidraw.svg',
        },
      ],
    },
    {
      category: 'Linux',
      items: [
        {
          title: 'Linux Methodology',
          description: 'Linux Methodology Cheatsheet',
          link: 'https://gabb4r.gitbook.io/oscp-notes',
        },
      ],
    }
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Resources
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Quicklinks to useful stuff.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-12">
            {resources.map((section) => (
              <div key={section.category} className="space-y-6">
                <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {section.category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform rounded-xl border border-gray-200 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:hover:shadow-gray-800"
                    >
                      <h3 className="text-primary-500 text-xl leading-8 font-bold tracking-tight">
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
