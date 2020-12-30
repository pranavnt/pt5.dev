import styles from "../styles/Home.module.css";
import React from "react";

export class Experience extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <a href={this.props.url} target="_blank">
          <h3>{this.props.name}</h3>
          {this.props.description}
        </a>
      </div>
    );
  }
}
