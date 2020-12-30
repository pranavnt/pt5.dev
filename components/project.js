import styles from "../styles/Home.module.css";
import React from "react";

export class Project extends React.Component {
  render() {
    return (
      <a href={this.props.url} className={styles.card} target="_blank">
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </a>
    );
  }
}

export default Project;
