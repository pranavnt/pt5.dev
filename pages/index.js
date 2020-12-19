import Head from "next/head";
import Project from "./components/project.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi! I'm Pranav Teegavarapu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ float: "left" }}>
        <h1 className={styles.title}>Hi! I'm Pranav Teegavarapu</h1>
      </div>

      <div className={styles.grid}>
        <Project
          url="https://nextjs.org/learn"
          name="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
        />

        <Project
          url="https://nextjs.org/learn"
          name="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
        />

        <Project
          url="https://nextjs.org/learn"
          name="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
        />

        <Project
          url="https://nextjs.org/learn"
          name="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
        />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://github.com/pranavnt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by @pranavnt
        </a>
      </footer>
    </div>
  );
}
