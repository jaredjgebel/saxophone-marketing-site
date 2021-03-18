import Head from "next/head";
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
          <div>The Saxophone Store</div>
        </nav>
      </header>

      <main className={styles.main}></main>
    </div>
  );
}
