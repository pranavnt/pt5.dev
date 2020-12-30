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

  function handleSelection(selection) {
    if (selection == "projects") {
      console.log("projects");
    } else if (selection == "experiences") {
      console.log("experiences");
    } else if (selection == "skills") {
      console.log("skills");
    }
  }

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
            <br />
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
              development, machine learning, and entrepreneurship!
            </p>
            <br />
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
        <div
          className="projectsDiv"
          style={{ padding: "2%", width: "70%", float: "right" }}
        >
          <table style={{ width: "100%" }}>
            <tr>
              <td
                style={selectedStyle}
                onClick={() => {
                  document.getElementById("projects").style.backgroundImage =
                    "linear-gradient(to right, #00d2ff, #3a7bd5)";
                  document.getElementById("projects").style.color = "white";

                  document.getElementById(
                    "experiences"
                  ).style.backgroundImage = null;
                  document.getElementById("experiences").style.color = "black";

                  document.getElementById(
                    "skills"
                  ).style.backgroundImage = null;
                  document.getElementById("skills").style.color = "black";
                }}
                id="projects"
              >
                Projects
              </td>
              <td
                onClick={() => {
                  document.getElementById(
                    "projects"
                  ).style.backgroundImage = null;
                  document.getElementById("projects").style.color = "black";

                  document.getElementById("experiences").style.backgroundImage =
                    "linear-gradient(to right, #00d2ff, #3a7bd5)";
                  document.getElementById("experiences").style.color = "white";

                  document.getElementById(
                    "skills"
                  ).style.backgroundImage = null;
                  document.getElementById("skills").style.color = "black";
                }}
                id="experiences"
              >
                Experience
              </td>
              <td
                onClick={() => {
                  document.getElementById(
                    "projects"
                  ).style.backgroundImage = null;
                  document.getElementById("projects").style.color = "black";

                  document.getElementById(
                    "experiences"
                  ).style.backgroundImage = null;
                  document.getElementById("experiences").style.color = "black";

                  document.getElementById("skills").style.backgroundImage =
                    "linear-gradient(to right, #00d2ff, #3a7bd5)";
                  document.getElementById("skills").style.color = "white";
                }}
                id="skills"
              >
                Skills
              </td>
            </tr>
          </table>
          <div style={{ padding: "1%", height: "80vh", overflow: "scroll" }}>
            {" "}
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
          </div>
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
