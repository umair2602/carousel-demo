import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Imagecarousel from "../components/imageCarousel";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image carousel Demo</title>
        <meta name="description" content="Image carousel Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome! Image carousel is shown below.
        </h3>

        <Imagecarousel
          imageLinkList={[
            "/images/img1.jpg",
            "/images/img2.jpg",
            "/images/img3.jpg",
          ]}
        />
      </main>

      <footer className={styles.footer}>
        Something about the demo carousel ...
      </footer>
    </div>
  );
};

export default Home;
