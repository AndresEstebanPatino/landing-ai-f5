import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Tech Time 2 Skill - Factoria F5</title>
      <meta name="description" content="This is my page" />
      </Head>
  <Component {...pageProps} />
  </>
  
}
