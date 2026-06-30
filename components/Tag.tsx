import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="bg-primary-500/10 text-primary-600 hover:bg-primary-500/20 dark:text-primary-400 rounded-md px-2 py-0.5 text-xs font-medium transition-colors"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
