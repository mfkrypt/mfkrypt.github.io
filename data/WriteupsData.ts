interface Writeups {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const WriteupsData: Writeups[] = [
  {
    title: 'HTB - Sightless',
    description: `Gaining RCE on an SQLpad web app, escaping docker jail and getting user access. Discovered internal host that led to Chrome Debugger Pentesting. Acquiring credentials on a 
    Froxlor Server Management Panel. Gaining root access afterwards by changing PHP-FPM commands to a bash SUID permission change.`,
    imgSrc: '/static/images/htb/linux/sightless/32.png',
    href: '/blog/htb/machines/linux/sightless',
  },
  {
    title: 'HTB - Underpass',
    description: `Discovered SNMP service on UDP port which reveals a daloRADIUS server web app with default credentials. Gained user access by credentials leak in the dashboard. User was allowed to run mosh-server with sudo permissions which enabled us to start a mosh-client and gain root access.`,
    imgSrc: '/static/images/htb/linux/underpass/13.png',
    href: '/blog/htb/machines/linux/underpass',
  },
]

export default WriteupsData
