import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <span className="uppercase text-red-600 text-shadow">bất động sản <span className='text-yellow-500'>H</span>T </span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="http://batdongsanht.ga"
              className="mx-3 bg-red-600 hover:bg-white hover:text-red-600 border border-red-600 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Xem dự án
            </a>
            <a
              href="tel:0973768583"
              className="mx-3 font-bold hover:underline"
            >
              Gọi ngay
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
