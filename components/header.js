import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="uppercase text-red-600 text-shadow">bất động sản <span className='text-yellow-500'>H</span>T </a>
      </Link>
      .
    </h2>
  )
}
