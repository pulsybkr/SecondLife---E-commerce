import '../styles/globals.css'
import '../styles/Product.module.css'
import '../styles/Login.module.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
