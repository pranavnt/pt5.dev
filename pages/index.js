import Head from "next/head";
import Project from "../components/project.js";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

export default function Home() {
  const selectedStyle = {
    backgroundImage: "linear-gradient(to right, #00d2ff, #3a7bd5)",
    color: "white",
  };

  const unselectedStyle = {
    backgroundImage: "white",
    color: "linear-gradient(to right, #00d2ff, #3a7bd5)",
  };

  function handleSelection(selection) {}

  return (
    <div className={styles.container}>
      <Head>
        <title>Hi! I'm Pranav Teegavarapu</title>
        <link rel="icon" href="/chewie-pfp.png" />
      </Head>
      <div>
        <div
          style={{
            width: "30%",
            padding: "20px",
            paddingTop: "6%",
            float: "left",
          }}
        >
          <img
            src="/Profile.png"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "65%",
              display: "block",
            }}
          />
          <div style={{ paddingBottom: "0px" }}>
            <p
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "20px",
                lineHeight: "30px",
                width: "80%",
                display: "block",
              }}
            >
              Hey! I'm Pranav, a 15 year old passionate about full stack
              development, ML, and entrepreneurship. I'm a hacker at heart, and
              love building side projects in my spare time, and have attended
              over a dozen hackathons to date! You can find me on the internet
              on any of the platforms below :)
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <SocialIcon
              style={{ marginRight: "10px" }}
              url="https://www.linkedin.com/in/pranavnt/"
            />
            <SocialIcon
              style={{ marginRight: "10px" }}
              url="https://github.com/pranavnt"
            />
            <SocialIcon
              style={{ marginRight: "10px" }}
              url="https://instagram.com/pranavnt5"
            />
            <SocialIcon
              style={{ marginRight: "10px" }}
              url="mailto:pranavnt@outlook.com"
            />
            <SocialIcon
              style={{ marginRight: "10px" }}
              url="https://blog.pt5.dev"
            />
          </div>
        </div>
        <div className="projectsDiv" style={{ padding: "2%" }}>
          <table style={{ width: "70%" }}>
            <td>Projects</td>
            <td>Experience</td>
            <td>Skills</td>
          </table>
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
