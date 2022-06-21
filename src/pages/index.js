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
          content="I am an avid full-stack developer, I have knowledge in HTML,CSS, JS, C#, SQL, and more! I'm always learning more and looking to expand my
            knowledge!"
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
              <h3>Chris-Leef</h3>
              <p>
                <em>February 2022 &ndash; Present</em>
              </p>
              <p>
                Primary Software developer creating scalable and efficient code
                for internal and external tools and sites.
              </p>
            </li>
            <li>
              <h3>Full-Stack Web Development Training</h3>
              <p>
                <strong>Centriq Training</strong>
              </p>
              <p>
                <em>July 2021 &ndash; October 2021</em>
              </p>
              <p>
                Learned front end, back end laungauges, and frameworks to bring
                real world applications to life with the use of these
                technologies.
              </p>
            </li>
            <li>
              <h3>Pluralsight</h3>
              <p>
                <em>January 2021 &ndash; present</em>
              </p>
              <p>
                Pluralsight is an online subscription based learning platform
                with an extremely large catalog of langauges and frameworks you
                can choose to learn. I expanded on my knowledge of javascript
                through the service so far and I plan on learning typescript,
                python, and nodejs.
              </p>
            </li>
            <li>
              <h3>Codecademy</h3>
              <p>
                <em>July 2019 &ndash; present</em>
              </p>
              <p>
                I used Codecademy because of my interest in coding after seeing
                my father have software deveolpment as his career and wanting to
                enter a tech related field. I found the website through online
                research and I learned how to type, html, css, and minor
                javascript through the service. I am continuing to brush up on
                my javascript skills through the service currently.
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
