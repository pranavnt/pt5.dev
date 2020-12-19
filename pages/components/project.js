import styles from "../styles/Home.module.css";

const Project = (props) => {
  return (
    <a href={props.info.url} className={styles.card}>
      <h3>{props.info.name}</h3>
      <p>{props.info.description}</p>
    </a>
  );
};
