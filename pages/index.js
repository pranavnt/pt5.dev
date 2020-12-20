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

      <div className="projectsDiv">
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div className={styles.grid}>
          <Project
            url="https://github.com/kobra-dev"
            name="Kobra 🐍"
            description="A visual programming language (like Scratch) for machine learning"
          />

          <Project
            url="https://github.com/OtterLang/Otter"
            name="Otter 🦦"
            description="A programming language built for speed, readability, and ergonomics"
          />

          <Project
            url="https://github.com/pranavnt/Walla"
            name="Walla 🦘"
            description="Walla is an intuitive, fast web framework for building APIs in Node"
          />

          <Project
            url="https://github.com/pranavnt/pt5.dev"
            name="pt5.dev 💻"
            description="My personal website (What you're looking at right now)!"
          />

          <Project
            url="https://devpost.com/software/Simplitize"
            name="Simplitize 📖"
            description="Using NLP-powered Question Answering to help users understand academic literature"
          />

          <Project
            url="https://devpost.com/software/PhishingNet"
            name="PhishingNet 🎣"
            description="NLP-powered chrome extension to detect phishing websites"
          />

          <Project
            url="https://github.com/pranavnt/Diffcheckr"
            name="Diffcheckr ✅"
            description="Minimal, intuitive diffchecker for comparing your output to test cases"
          />

          <Project
            url="https://github.com/pranavnt"
            name="GitHub 🔧"
            description="Check out my GitHub to see any other projects I'm working on!"
          />
        </div>
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
