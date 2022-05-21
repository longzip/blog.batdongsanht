import Image from 'next/image'

export default function Avatar({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src="https://i0.wp.com/batdongsanht.ngoclong.ga/wordpress/wp-content/uploads/sites/40/2022/05/logo-0.png?w=500&ssl=1"
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold"><span className="uppercase text-red-600 text-shadow">bất động sản <span className='text-yellow-500'>H</span>T </span></div>
    </div>
  )
}
