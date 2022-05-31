import React from "react";
import styles from "../loading.module.css";
const Loading = () => {
  return (
    <div className="container mt-1">
      <div className={styles.containerSnipper}>
        <div className={styles.loadingContainer}>
          <div className={styles.loader}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
