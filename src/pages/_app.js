import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import styles from "../styles/page.module.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="shortcut icon" href="" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
