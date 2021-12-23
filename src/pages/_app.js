import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import styles from "../styles/page.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
