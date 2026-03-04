export interface EventPhoto {
  src: string
  alt?: string
  wide?: boolean
}

export interface EventItem {
  slug: string
  title: string
  date: string
  location?: string
  description?: string
  photos: EventPhoto[]
}

const EventsData: EventItem[] = [
  
  {
    slug: 'HTB Meetup',
    title: 'HTB Meetup @ GMI',
    date: '2025-07-26',
    location: 'Bangi, Malaysia',
    description:
      'Had the honour of being the speaker for the HTB meetup hosted at GMI, the topic I presented was about Active Directory more specifically Kerberos for beginners to understand. Major thanks to GMI Cysec & ICE for having me.',
    photos: [
      {
        src: '/static/images/events/htb-meetup/1.jpeg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/htb-meetup/2.jpeg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/htb-meetup/3.jpeg',
        alt: 'Placeholder',
      },
      
    ],
  },

  {
    slug: 'GMI-Sharing-Session',
    title: 'GMI Sharing Session',
    date: '2025-02-23',
    location: 'Bangi, Malaysia',
    description:
      'Did a technical sharing session on using C2 frameworks like Sliver for red teaming. Also did another beginner session on binary exploitation, tackling common pwn challenges in CTFs ',
    photos: [
      {
        src: '/static/images/events/gmi-sharing/1.jpg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/gmi-sharing/2.jpeg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/gmi-sharing/3.jpeg',
        alt: 'Placeholder',
      },
      
    ],
  },
  
  {
    slug: 'MCC2024',
    title: 'Malaysia Cybersecurity Camp, MCC 2024',
    date: '2024-11-29',
    location: 'Port Dickson, Malaysia',
    description:
      'Got selected to participate in MCC2024 which honestly I did not expect. I had fun learning new stuff and meeting other cool, talented and down-to-earth people especially my idol, Capang. Major thanks to RE:HACK for giving me the opportunity to be part of this camp!',
    photos: [
      {
        src: '/static/images/events/mcc/2.jpg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/mcc/3.jpg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/mcc/4.jpg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/mcc/1.jpeg',
        alt: 'Placeholder',
      },
    ],
  },
]

export default EventsData
