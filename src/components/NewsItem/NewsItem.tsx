import classNames from "classnames"
import React from "react"

import Badge from "~/components/Badge/Badge"

import styles from "./index.module.css"

const cx = classNames.bind(styles)

export interface NewsItemProps {
  item: {
    text?: string
    title?: string
    image?: string
    svg?: boolean
    circle?: boolean
    arch?: boolean
    badges?: [{ id?: number; new?: boolean; big: true }]
    small?: boolean
    big?: boolean
    number?: number
    numberSvg?: string
  }
  circle?: boolean
  horizontal?: boolean
}

export default class NewsItem extends React.Component<NewsItemProps> {
  public render() {
    const { item, horizontal } = this.props
    const classNameNewsItem = cx({
      [styles.NewsItem]: true,
      [styles.NewsItem_horizontal]: horizontal,
      [styles.NewsItem_small]: item.small,
      [styles.NewsItem_circle]: item.circle,
      [styles.NewsItem_arch]: item.arch,
    })

    const classNameBadges = cx({
      [styles.NewsItem_Badges]: true,
      [styles.NewsItem_Badges_small]: item.small,
    })

    const classNameTitle = cx({
      [styles.NewsItem_Title]: true,
      [styles.NewsItem_Title__small]: item.small,
      [styles.NewsItem_Title__big]: item.big,
    })

    const classNameNumber = cx({
      [styles.NewsItem_Number]: true,
      [styles.NewsItem_Number__center]: item.small,
      [styles.NewsItem_Number__left]: item.big,
    })

    return (
      <React.Fragment>
        <a className={classNameNewsItem} href="#">
          <div className={styles.NewsItem_NumberWrapper}>
            <div className={styles.NewsItem_Image}>
              {item.svg ? (
                <object data={item.image} type="image/svg+xml">
                  Your browser does not support SVG
                </object>
              ) : (
                <img alt="" src={item.image} />
              )}
            </div>

            {item.number && (
              <div className={classNameNumber}>
                {item.number}
                {item.numberSvg && (
                  <img alt="" className={styles.Number_Svg} src={item.numberSvg} />
                )}
              </div>
            )}
          </div>
          <h3 className={classNames(classNameTitle)}>{item.title}</h3>
          <p className={styles.NewsItem_Text}>{item.text}</p>
          {item.badges && (
            <div className={classNameBadges}>
              {item.badges.map((badge) => (
                <Badge key={badge.id} badge={badge} />
              ))}
            </div>
          )}
        </a>
      </React.Fragment>
    )
  }
}
