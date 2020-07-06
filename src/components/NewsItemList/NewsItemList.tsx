import classNames from "classnames/bind"
import React, { Component } from "react"

import NewsItem from "~/components/NewsItem/NewsItem"

import styles from "./index.module.css"

const cx = classNames.bind(styles)

export interface NewsItemListProps {
  items?: any
  small?: boolean
  big?: boolean
  horizontal?: boolean
}

export default class NewsItemList extends Component<NewsItemListProps> {
  render() {
    const { items, small, big, horizontal } = this.props
    const className = cx({
      [styles.NewsItemList]: true,
      [styles.NewsItemList_horizontal]: horizontal,
      [styles.NewsItemList_small]: small,
      [styles.NewsItemList_big]: big,
    })
    return (
      <React.Fragment>
        <ul className={className}>
          {items.map((item: {}, index: number): any => {
            return (
              <li key={index}>
                <NewsItem item={item} horizontal={horizontal}/>
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}
