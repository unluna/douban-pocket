import axios from 'axios/index'
import fetchJsonp from 'fetch-jsonp'

import {
  GET_INNER,
  CHANGE_BOOKLIST,
  CHANGE_FOOTER_STATE,
  CHANGE_VIDEOLIST,
  CHANGE_MUSICLIST,
  CHANGE_FOOTER_COLOR,
} from './action-types'

export const getInner = (inner) => ({type: GET_INNER, data: inner})

export const changeFooterState = (foot) => ({type: CHANGE_FOOTER_STATE, data: foot})

export const getBookList = (bookList) => ({type: CHANGE_BOOKLIST, data: bookList})

export const AjaxBookList = (searchName) => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/book/search?q={${searchName}}`
    fetchJsonp(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        let bookList = json.books.map((name, key) => {
          return ({
            title: name.title,//书名
            authors: name.author,//作者（arr）
            rating: name.rating,//评分（obj）
            pubdate: name.pubdate,//出版时间
            image: 'https://images.weserv.nl/?url=' + name.image,//书的图片
            tags: name.tags,//标签(arr)
            catalog: name.catalog,//序言
            summary: name.summary,//简介
            publisher: name.publisher,//出版社
            price: name.price,//价格
          })
        })
        dispatch(getBookList(bookList))
      })
  }
}

export const getMusicList = (musicList) => ({type: CHANGE_MUSICLIST, data: musicList})

export const AjaxMusicList = (searchName) => {
  return dispatch => {
    //发送ajax请求
    const url = `/v2/music/search?q={${searchName}}`
    axios.get(url)
      .then(response => {
        const musicList = response.data.musics.map((name, key) => {
          return ({
            title: name.title,//歌名
            author: name.author,//作者（数组，内含对象）
            rating: name.rating.average,//评分
            image: 'https://images.weserv.nl/?url=' + name.image,//歌曲图片
            tags: name.tags,//标签（数组，内涵对象）
            publisher: name.attrs.publisher,//发布商（数组）
            pubdate: name.attrs.pubdate,//发布时间（数组）
            tracks: name.attrs.tracks,//内容（数组）
          })
        })
        dispatch(getMusicList(musicList))
      })
  }
}

export const getVideoList = (videoList) => ({type: CHANGE_VIDEOLIST, data: videoList})

export const AjaxVideoList = (searchName) => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/movie/search?q={${searchName}}`
    axios.get(url)
      .then(response => {
        const videoList = response.data.subjects.map((name, key) => {
          return ({
            casts: name.casts,//演员（数组，内对象）
            title: name.title,//电影名
            genres: name.genres,//标签
            rating: name.rating.average,//评分
            images: 'https://images.weserv.nl/?url=' + name.images.small,//图片
            year: name.year,//上映时间
            directors: name.directors,//导演(数组,内对象)
          })
        })
        dispatch(getVideoList(videoList))
      })
  }
}

export const changeColor = (Acolor) => ({type: CHANGE_FOOTER_COLOR, data: Acolor})
