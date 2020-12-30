import Head from "next/head";
import Project from "../components/project.js";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
import { useReducer, useState } from "react";
import { projects, experiences } from "../components/utils.js";

export default function Home() {
  const [content, setContent] = useState(projects);

  const selectedStyle = {
    backgroundImage: "linear-gradient(to right, #00d2ff, #3a7bd5)",
    color: "white",
  };

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
              Hey! I'm Pranav, a 15 year old high school student passionate
              about full stack development, machine learning, and
              entrepreneurship!
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

                  setContent(projects);
                  console.log(content);
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

                  setContent(experiences);
                  console.log(content);
                }}
                id="experiences"
              >
                Experience
              </td>
            </tr>
          </table>
          <div style={{ padding: "1%", height: "75vh", overflow: "scroll" }}>
            {content}
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
