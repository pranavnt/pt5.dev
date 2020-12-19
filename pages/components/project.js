import styles from "../styles/Home.module.css";

const Project = (props) => {
  return (
    <a href={props.info.url} className={styles.card}>
      <h3>Learn</h3>
      <p>Learn about Next.js in an interactive course with quizzes!</p>
    </a>
  );
};
