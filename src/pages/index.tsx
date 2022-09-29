import Head from 'next/head'

import { HomeContainer } from './../styles/pages/home'
export default function Home() {
  return (
    <>
      <Head>
        <title>Quick Tips | Dicas rápidas</title>
      </Head>

      <HomeContainer>
        <h1>Page Home</h1>
        <span>Teste de fonte </span>
      </HomeContainer>
    </>
  )
}
