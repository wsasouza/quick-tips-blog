import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

import { Container } from '../styles/pages/app'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [activeColor, setActiveColor] = useState(false)

  useEffect(() => {
    function scroll() {
      if (window.scrollY > 10) {
        setActiveColor(true)
      } else {
        setActiveColor(false)
      }
    }

    window.addEventListener('scroll', scroll)
  }, [activeColor])

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={defaultTheme}>
        <Header scroll={activeColor} />
        <Container>
          <Component {...pageProps} />
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
