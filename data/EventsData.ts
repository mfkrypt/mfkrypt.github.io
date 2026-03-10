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
    title: 'Speaker for HackTheBox Meetup @ GMI',
    date: '2025-07-26',
    location: 'Bangi, Malaysia',
    description:
      ' I Had the honour of being the speaker for the HTB meetup hosted at GMI, the topic I presented was about Active Directory more specifically Kerberos for beginners to understand. Major thanks to GMI Cysec & ICE for having me.',
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
    slug: 'SINCON 2025',
    title: 'Attending SINCON 2025',
    date: '2025-05-22',
    location: 'Orchard Road, Singapore',
    description:
      'I was fortunate enough to attend SINCON 2025, a cybersecurity conference held in Singapore. I explored RFID Hacking, AI Security and tried out the Active Directory range by The Range Village. Much thanks to Sherpasec for providing me with the ticket to attend this prestigious event.',
    photos: [
      {
        src: '/static/images/events/sincon/1.jpeg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/sincon/2.jpeg',
        alt: 'Placeholder',
      },
      {
        src: '/static/images/events/sincon/3.jpeg',
        alt: 'Placeholder',
      },
      
    ],
  },

  {
    slug: 'GMI-Sharing-Session',
    title: 'Red & Blue Team Workshop Sharing Session @ GMI',
    date: '2025-02-23',
    location: 'Bangi, Malaysia',
    description:
      ' I did a technical sharing session on using C2 frameworks like Sliver for red teaming. Also did another beginner session on binary exploitation, tackling common pwn challenges in CTFs ',
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
      'Was selected to participate in MCC2024 which honestly I did not expect. I had fun learning new stuff and meeting other cool, talented and down-to-earth people especially my idol, Capang. Major thanks to RE:HACK for giving me the opportunity to be part of this camp!',
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
