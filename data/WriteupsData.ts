interface Writeups {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const WriteupsData: Writeups[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'HTB Sightless',
    description: `Gaining RCE on an SQLpad web app, escaping docker jail and getting user access. Discovered internal host that led to Chrome Debugger Pentesting. Acquiring credentials on a 
    Froxlor Server Management Panel. Gaining root access afterwards by changing PHP-FPM commands to a bash SUID permission change.`,
    imgSrc: '/static/images/htb/linux/sightless/32.png',
    href: '/blog/htb/machines/linux/sightless',
  },
]

export default WriteupsData
