import Head from "next/head";
import Image from "next/image";
import portraitPhoto from "../../public/portrait.jpg";
import styles from "../styles/Home.module.css";
import Form from "../components/Navbar/Form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sean Slicer</title>
        <meta
          name="description"
          content="I am an efficient engineer with great detailing skills, a hunger for knowledge, and keeping up to date with modern technologies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="Aboutme">
          <header>
            <div className={styles.imgdiv}>
              <Image
                className={styles.portrait}
                src={portraitPhoto}
                alt="Portrait of Sean"
                width={256}
                height={256}
              />
            </div>
          </header>
          <div className={styles.aboutme}>
            <h1>Sean Slicer</h1>
            <p>
              OLATHE, KS.{" "}
              <a href="mailto:seanslicer@gmail.com">SEANSLICER@GMAIL.COM</a>
            </p>
            <p>
              I am an avid full-stack developer, I have knowledge in HTML,CSS,
              JS, C#, SQL, and more! I&apos;m always learning more and looking
              to expand my knowledge!
            </p>
          </div>
        </section>
        <hr />
        <section id="Experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>evental.app</h3>
              <p>
                <em>June 2022 &ndash; Present</em>
              </p>
              <p>
                Revisiting evental to help aid in the creation of the new
                evental React Native Application.
              </p>
            </li>
            <li>
              <h3>Chris-Leef</h3>
              <p>
                <em>February 2022 &ndash; June 2022</em>
              </p>
              <p>
                Primary Software developer creating scalable and efficient code
                for internal and external tools and sites.
              </p>
            </li>
            <li>
              <h3>evental.app</h3>
              <p>
                <em>March 2020 &ndash; February 2022</em>
              </p>
              <p>
                Full-Stack Software Engineer creating a web application for
                event management using modern tools.
              </p>
            </li>
          </ul>
        </section>
        <hr />
        <section id="Contact">
          <h2>Contact Me</h2>
          <Form />
        </section>
      </main>
    </div>
  );
}
