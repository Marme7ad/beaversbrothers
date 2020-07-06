import React from "react"

import styles from "./index.module.css"

export const HorizontalScroll: React.FC = ({ children }) => (
  <div className={styles.HorScroll}>
    {children}
  </div>
)
