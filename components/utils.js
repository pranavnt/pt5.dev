import { Project } from "./project.js";
import { Experience } from "./experience.js";

export const projects = [
  <Project
    url="https://github.com/kobra-dev"
    name="Kobra 🐍"
    description="A visual programming language (like Scratch) for machine learning"
  />,
  <Project
    url="https://github.com/OtterLang/Otter"
    name="Otter 🦦"
    description="A programming language built for speed, readability, and ergonomics"
  />,
  <Project
    url="https://github.com/pranavnt/Walla"
    name="Walla 🦘"
    description="Walla is an intuitive, fast web framework for building APIs in Node"
  />,
  <Project
    url="https://github.com/pranavnt/pt5.dev"
    name="pt5.dev 💻"
    description="My personal website (What you're looking at right now)!"
  />,
  <Project
    url="https://devpost.com/software/Simplitize"
    name="Simplitize 📖"
    description="Using NLP-powered Question Answering to help users understand academic literature"
  />,
  <Project
    url="https://devpost.com/software/PhishingNet"
    name="PhishingNet 🎣"
    description="NLP-powered chrome extension to detect phishing websites"
  />,
  <Project
    url="https://github.com/pranavnt/Diffcheckr"
    name="Diffcheckr ✅"
    description="Minimal, intuitive diffchecker for comparing your output to test cases"
  />,
  <Project
    url="https://github.com/pranavnt"
    name="GitHub 🔧"
    description="Check out my GitHub to see any other projects I'm working on!"
  />,
];

export const experiences = [
  <Experience
    url="https://github.com/kobra-dev"
    name="Founder and Developer @ Kobra "
    description={
      <ul>
        <li>
          Founded Kobra, a visual programming language for Machine Learning
        </li>
        <li>
          Worked on the frontend in Next.js + TypeScript and the backend in
          TypeScript + GraphQL
        </li>
        <li></li>
      </ul>
    }
  />,
  <Experience
    url="https://brainsquall.co"
    name="Data Analytics and Web Development Intern @ BrainSquall "
    description={
      <ul>
        <li>
          Used K-Means clustering for customer segmentation based on customer
          data to drive personalized email marketing
        </li>
        <li>
          Performed extensive data manipulation with NumPy and Pandas and
          conducted statistical tests to filter out outliers
        </li>
        <li>
          Used Google Data Studio to create a dashboard to display BrainSquall's
          Marketing Data
        </li>
        <li>
          Built feature to display a modal with options when the user is copying
          the board{" "}
        </li>
        <li>
          Edited a promotional video highlighting BrainSquall's use case for org
          charts
        </li>
      </ul>
    }
  />,
];
