import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <span className="uppercase text-red-600 text-shadow">bất động sản <span className='text-yellow-500'>H</span>T </span>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Đầu tư nhận lời cao 2022 - Xu hướng sinh lời khủng 2022{' '}
        <a
          href="http://batdongsanht.ga"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Xem Thông tin dự án
        </a>{' '}
        hoặc{' '}
        <a
          href="tel:0973768583"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Liên hệ ngay
        </a>
        .
      </h4>
    </section>
  )
}
