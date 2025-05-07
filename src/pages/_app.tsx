import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
         <script defer src="https://videoadstech.org/ads/hotnews_livextop_com.1d06ac42-fc4e-4ae1-8dc9-04bf4d3de7b3.video.js"></script>
        <script async src="https://server.adhub.media/ads/hotnews_livextop_com.f3e9d7a2-9f18-4452-903b-94b6e84d3c0c.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
