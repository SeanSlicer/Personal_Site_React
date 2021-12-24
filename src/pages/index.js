import Head from "next/head";
import Image from "next/image";
import portraitPhoto from "../../public/portrait.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sean Slicer</title>
        <meta
          name="description"
          content="I am a full-stack software developer, currently specializing in the
            .NET stack. I'm always learning more and looking to expand my
            knowledge!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="Aboutme">
          <header>
            <Image
              className={styles.portrait}
              src={portraitPhoto}
              alt="Portrait of Sean"
              width={512}
              height={512}
            />
            <h1>Sean Slicer</h1>
          </header>
          <p>OLATHE, KS</p>
          <p>
            <a href="mailto:seanslicer@gmail.com">SEANSLICER@GMAIL.COM</a>
          </p>
          <p>
            I am a full-stack software developer, currently specializing in the
            .NET stack. I&apos;m always learning more and looking to expand my
            knowledge!
          </p>
        </section>
        <hr className="xline" />
        <section id="Experience">
          <h2>Experience</h2>
          <ul>
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
        <hr className="xline" />
        <section id="Contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="I'd like to get in touch about..."
            />

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}
