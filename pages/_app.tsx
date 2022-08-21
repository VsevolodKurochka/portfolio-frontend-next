import '../scss/index.scss'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Component {...pageProps} />
      </div>
  )
}

export default appWithTranslation(MyApp)
