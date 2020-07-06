import React, { Component } from "react"

import { Layout } from "~/components/Layout/Layout"
import NewsItemList from "~/components/NewsItemList/NewsItemList"
import { Title } from "~/components/Title/Title"
import { HorizontalScroll } from "~/components/HorizontalScroll/HorizontalScroll"
import "~/assets/styles/index.css"

const mainNews = [
  {
    id: 1,
    image: "/image/newsItemBig1.jpg",
    title: "10 самых знаменитых арт\u00A0-\u00A0объектов Екатеринбурга",
    text: "Общественный, культурный и образовательный центр",
    arch: true,
    big: true,
    badges: [
      {
        id: 1,
        new: true,
        big: true,
      },
      {
        id: 2,
        route: true,
        big: true,
      },
    ],
  },
  {
    id: 2,
    image: "/image/newsItemBig2.jpg",
    title: "Ельцин-центр",
    text: "Общественный, культурный и образовательный центр",
    circle: true,
    big: true,
    badges: [
      {
        id: 1,
        new: true,
        big: true,
      },
    ],
  },
]
const news = [
  {
    id: 1,
    image: "/image/newsItem1.jpg",
    title: "20 топовых исторических мест Екатеринбурга",
    text: "Со времен основания Екатеринбурга и довоенное время",
    small: true,
    badges: [
      {
        id: 1,
        new: true,
        small: true,
      },
      {
        id: 2,
        route: true,
        small: true,
      },
    ],
  },
  {
    id: 2,
    image: "/image/newsItem2.jpg",
    title: "Инсталляция в рамках фестиваля",
    text: "За один вечер художники создадут необычный арт-объект",
    small: true,
    badges: [
      {
        id: 1,
        new: true,
        small: true,
      },
    ],
  },
  {
    id: 3,
    image: "/image/newsItemSvg1.svg",
    title: "Инсталляция в рамках фестиваля",
    text: "За один вечер художники создадут необычный арт-объект",
    svg: true,
    small: true,
    badges: [
      {
        id: 1,
        new: true,
        small: true,
      },
    ],
  },
  {
    id: 4,
    image: "/image/newsItem3.jpg",
    title: "Цветочный портал",
    text: "Арт-объект фестиваля Стеннография",
    small: true,
    badges: [
      {
        id: 1,
        new: true,
        small: true,
      },
    ],
  },
]
const mainLocation = [
  {
    id: 1,
    number: 1,
    numberSvg: "/image/numberSvg1.svg",
    image: "/image/locationImage1.jpg",
    title: "Невьянская башня",
    text: "Остатки прошлого величия промышленников Демидовых",
    circle: true,
    big: true,
  },
  {
    id: 2,
    number: 2,
    image: "/image/locationImage2.jpg",
    title: "Ганина яма",
    text: "В 1918 году в шахту бросили останки представителей царской династии Романовых",
    arch: true,
    big: true,
  },
]
const location = [
  {
    id: 1,
    number: 3,
    image: "/image/locationImage3.jpg",
    title: "Верхотурье",
    text: "Духовный центр России",
    small: true,
  },
  {
    id: 2,
    number: 4,
    image: "/image/locationImage4.jpg",
    title: "Аркаим",
    text: "Город древних цивилизаций",
    small: true,
  },
  {
    id: 3,
    number: 5,
    numberSvg: "/image/numberSvg2.svg",
    image: "/image/locationImage5.jpg",
    title: "Оленьи ручьи",
    text: "Красивый парк с памятниками древней истории",
    small: true,
    badges: [
      {
        id: 1,
        children: true,
        small: true,
      },
    ],
  },
  {
    id: 4,
    number: 6,
    image: "/image/locationImage6.jpg",
    title: "Конжаковский камень",
    text: "Высшая точка Свердловской области",
    small: true,
  },
  {
    id: 5,
    number: 7,
    image: "/image/locationImage7.jpg",
    title: "Качканар",
    text: "Причудливые скальные останцы и буддийский монастырь",
    small: true,
  },
  {
    id: 6,
    number: 8,
    numberSvg: "/image/numberSvg3.svg",
    image: "/image/locationImage8.jpg",
    title: "Зюраткуль",
    text: "Горный хребет и озеро",
    small: true,
    badges: [
      {
        id: 1,
        basko: true,
        small: true,
      },
    ],
  },
  {
    id: 7,
    number: 9,
    image: "/image/locationImage9.jpg",
    title: "Аракульский Шихан",
    text: "Живописная скальная стена с причудливыми формами",
    small: true,
  },
  {
    id: 8,
    number: 10,
    image: "/image/locationImage10.jpg",
    title: "Граница европы и Азии",
    text: "Монументы и стеллы на магистралях",
    small: true,
  },
]

export interface PageProps {
  mainNews: []
  news: []
  mainLocation: []
  location: []
}

export default class extends Component<PageProps> {
  render() {
    return (
      <Layout>
        <Title>
          <i>Новые</i> места <i>и</i>&nbsp;маршруты
        </Title>
        <HorizontalScroll>
          <NewsItemList items={mainNews} big horizontal />
          <NewsItemList items={news} small />
        </HorizontalScroll>
        <Title>
          ТОП <i>10</i> мест Урала
        </Title>
        <NewsItemList items={mainLocation} big />
        <HorizontalScroll>
          <NewsItemList items={location} small />
        </HorizontalScroll>
      </Layout>
    )
  }
}
