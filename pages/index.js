import Head from "next/head";
import Image from "next/image";

import Panels from "../components/panel/Panels";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Saxophone Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Sora:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <a href="#">Location & Hours</a>
          <div className={styles.headerNavRight}>The Saxophone Store</div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>The Saxophone Store</h1>
            <h2>Quality, Variety, and Selectivity</h2>
          </div>
        </div>

        <Panels />

        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <Image
              src="/thijs-slootjes.webp"
              alt="Person playing saxophone"
              width={400}
              height={600}
            />
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.sectionSubheading}>Quality</h2>
            <p className={styles.sectionBody}>
              Every instrument is handpicked with care so our customers only get
              the very best. The quality of our instruments in unparalleled.
            </p>
          </div>
        </div>

        <Panels />

        <div className={styles.section}>
          <div className={styles.sectionText}>
            <h2 className={styles.sectionSubheading}>Variety</h2>
            <p className={styles.sectionBody}>
              We offer a variety of brands from across the globe to find the
              very best saxophone for you.
            </p>
          </div>
          <div className={styles.sectionImage}>
            <Image
              src="/gabe-rebra.webp"
              alt="Person playing saxophone"
              width={400}
              height={600}
            />
          </div>
        </div>

        <Panels />

        <div className={styles.section}>
          <div className={styles.sectionImage}>
            <Image
              src="/kevin-maillefer.webp"
              alt="Person playing saxophone"
              width={400}
              height={600}
            />
          </div>
          <div className={styles.sectionText}>
            <h2 className={styles.sectionSubheading}>Selectivity</h2>
            <p className={styles.sectionBody}>
              We limit our clientele in order to provide a full-service,
              customized experience. You will get the very best saxophone for
              your playing style and goals as a musician.
            </p>
          </div>
        </div>

        <Panels />

        <div className={styles.contact}>
          <h2>Location & Hours</h2>
          <div className={styles.locationHours}>
            <div className={styles.location}>
              <p>3456 Fictional Lane</p>
              <p>800-444-7777</p>
            </div>
            <div className={styles.hours}>
              <p>
                Sunday-Thursday: <span>10 am-4 pm</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
