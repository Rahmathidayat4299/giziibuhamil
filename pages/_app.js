import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='dicoding:email' content='rizkymaestro12@gmail.com'></meta>
        <link rel="icon" href="https://raw.githubusercontent.com/nabati17/capstone_Img/main/img/pregnant.png" />
        <title>Ibu hamil sehat</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
