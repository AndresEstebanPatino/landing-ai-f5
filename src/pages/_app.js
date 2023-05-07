import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tech Time 2 Skill - Factoria F5</title>
        <meta name="description" content="Formación en  Inteligencia Artificial y Ciberseguridad para CEO's y Directivos, para empleados y demandantes de empleo" />
        <link
          rel="icon"
          href="/img/general/cropped-FAVICON-F5-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/img/general/cropped-FAVICON-F5-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/img/general/cropped-FAVICON-F5-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/img/general/cropped-FAVICON-F5-270x270.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
  
}
