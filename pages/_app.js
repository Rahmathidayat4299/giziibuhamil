// pages/_app.js
import Head from 'next/head';
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="https://raw.githubusercontent.com/nabati17/capstone_Img/main/img/pregnant.png" />
        <title>Website Title</title>
      </Head>
      <Component {...pageProps} />
    </>
  );

function MyApp ({ Component, pageProps }) {
	return <Component {...pageProps} />

}
}

export default MyApp;
