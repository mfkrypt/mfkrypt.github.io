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
    title: 'HTB ProLabs - Dante',
    description: `Dante ProLab is a simulated network with 14 machines and 27 flags. The critical learning in this lab was Network Pivoting`,
    imgSrc: '/static/images/dante.png',
    href: 'https://mfkrypt.gitbook.io/stuff/ctf-writeups/hackthebox/prolabs/dante',
  },
]

export default WriteupsData
