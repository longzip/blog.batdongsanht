import Container from './container'
import cn from 'classnames'
// import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is a page preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              Nhận ký gửi, mua bán nhà đất, đo đạc, sang tên sổ đỏ{' '}
              <a
                href={`tel:0973768583`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                Liên hệ ngay
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
