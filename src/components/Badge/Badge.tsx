import classNames from "classnames"
import React from "react"

import styles from "./index.module.css"

const cx = classNames.bind(styles)

export interface BadgeProps {
  badge: {
    new?: boolean
    small?: boolean
    big?: boolean
    route?: boolean
    children?: boolean
    basko?: boolean
  }
}

export default class Badge extends React.Component<BadgeProps> {
  public render() {
    const { badge } = this.props
    const className = cx({
      [styles.Badge]: true,
      [styles.Badge_big]: badge.big,
      [styles.Badge_small]: badge.small,
      [styles.Badge_New]: badge.new,
      [styles.Badge_Route]: badge.route,
      [styles.Badge_Children]: badge.children,
      [styles.Badge_Basko]: badge.basko,
    })

    return (
      <React.Fragment>
        <div className={className} />
      </React.Fragment>
    )
  }
}
