import React from "react"

import styles from "./index.module.css"

export const Title: React.FC = ({ children }) => (
  <React.Fragment>
    <h2 className={styles.Title}>{children}</h2>
  </React.Fragment>
)
