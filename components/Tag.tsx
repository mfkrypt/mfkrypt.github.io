import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="rounded-md bg-primary-500/10 px-2 py-0.5 text-xs font-medium text-primary-600 transition-colors hover:bg-primary-500/20 dark:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
