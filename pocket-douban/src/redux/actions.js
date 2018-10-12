import axios from 'axios/index'
import fetchJsonp from 'fetch-jsonp'

import {
  GET_INNER,
  CHANGE_BOOKLIST,
  CHANGE_FOOTER_STATE,
  CHANGE_VIDEOLIST,
  CHANGE_MUSICLIST,
  CHANGE_FOOTER_COLOR,
  GET_BOOK_SEARCHNAME,
  BOOKLIST_MORE,
  GET_MUSIC_SEARCHNAME,
  MUSICLIST_MORE,
  GET_VIDEO_SEARCHNAME,
  VIDEOLIST_MORE,
  BOOKLIST_SHOW,
  MUSICLIST_SHOW,
  VIDEOLIST_SHOW,
  BOOK_REQUEST_START,
  MUSIC_REQUEST_START,
  VIDEO_REQUEST_START,
  BOOK_REQUEST_START_MORE,
  MUSIC_REQUEST_START_MORE,
  VIDEO_REQUEST_START_MORE,
} from './action-types'
//inner：获取搜索框的文字
export const getInner = (inner) => ({type: GET_INNER, data: inner})
//start：搜索的起始点
export const bookListStart = (start) => ({type: BOOK_REQUEST_START, data: start})

export const musicListStart = (start) => ({type: MUSIC_REQUEST_START, data: start})

export const videoListStart = (start) => ({type: VIDEO_REQUEST_START, data: start})

export const bookListStartMore = (start) => ({type: BOOK_REQUEST_START_MORE, data: start})

export const musicListStartMore = (start) => ({type: MUSIC_REQUEST_START_MORE, data: start})

export const videoListStartMore = (start) => ({type: VIDEO_REQUEST_START_MORE, data: start})
//SearchName：每个列表对应的搜索名
export const getBookSearchName = (searchName) => ({type: GET_BOOK_SEARCHNAME, data: searchName})

export const getMusicSearchName = (searchName) => ({type: GET_MUSIC_SEARCHNAME, data: searchName})

export const getVideoSearchName = (searchName) => ({type: GET_VIDEO_SEARCHNAME, data: searchName})
//Show：改变列表的状态位
export const changeBookListShow = (bookListShow) => ({type: BOOKLIST_SHOW, data: bookListShow})

export const changeMusicListShow = (musicListShow) => ({type: MUSICLIST_SHOW, data: musicListShow})

export const changeVideoListShow = (videoListShow) => ({type: VIDEOLIST_SHOW, data: videoListShow})
//get：获取列表
export const getBookList = (bookList) => ({type: CHANGE_BOOKLIST, data: bookList})

export const getBookListMore = (bookListMore) => ({type: BOOKLIST_MORE, data: bookListMore})

const bookListItem = (name) => {
  return ({
    title: name.title,//书名
    authors: name.author,//作者（arr）
    rating: name.rating,//评分（obj）
    pubdate: name.pubdate,//出版时间
    image: name.image,//书的图片
    tags: name.tags,//标签(arr)
    catalog: name.catalog,//序言
    summary: name.summary,//简介
    publisher: name.publisher,//出版社
    price: name.price,//价格
  })
}
//Ajax：发送请求
export const AjaxBookList = (searchName = 'a') => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/book/search?q={${searchName}}&start=1`
    fetchJsonp(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        dispatch(changeBookListShow('second'))
        let bookList = json.books.map((name, key) => {
          return (bookListItem(name))
        })
        dispatch(getBookList(bookList))
        dispatch(bookListStart(bookList.length))
      })
  }
}

export const AjaxBookListMore = (searchName = 'a', origin = 1) => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/book/search?q={${searchName}}&start=${origin}`
    fetchJsonp(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        dispatch(changeBookListShow('second'))
        let bookList = json.books.map((name, key) => {
          return (bookListItem(name))
        })
        dispatch(getBookListMore(bookList))
        dispatch(bookListStartMore(bookList.length))
      })
  }
}

export const getMusicList = (musicList) => ({type: CHANGE_MUSICLIST, data: musicList})

export const getMusicListMore = (musicListMore) => ({type: MUSICLIST_MORE, data: musicListMore})

const musicListItem = (name) => {
  return ({
    title: name.title,//歌名
    author: name.author,//作者（数组，内含对象）
    rating: name.rating.average,//评分
    image: name.image,//歌曲图片
    tags: name.tags,//标签（数组，内涵对象）
    publisher: name.attrs.publisher,//发布商（数组）
    pubdate: name.attrs.pubdate,//发布时间（数组）
    tracks: name.attrs.tracks,//内容（数组）
  })
}

export const AjaxMusicList = (searchName = 'a') => {
  return dispatch => {
    //发送ajax请求
    const url = `/v2/music/search?q={${searchName}}&start=1`
    axios.get(url)
      .then(response => {
        dispatch(changeMusicListShow('second'))
        const musicList = response.data.musics.map((name, key) => {
          return (musicListItem(name))
        })
        dispatch(getMusicList(musicList))
        dispatch(musicListStart(musicList.length))
      })
  }
}

export const AjaxMusicListMore = (searchName = 'a', origin = 1) => {
  return dispatch => {
    //发送ajax请求
    const url = `/v2/music/search?q={${searchName}}&start=${origin}`
    axios.get(url)
      .then(response => {
        dispatch(changeMusicListShow('second'))
        const musicList = response.data.musics.map((name, key) => {
          return (musicListItem(name))
        })
        dispatch(getMusicListMore(musicList))
        dispatch(musicListStartMore(musicList.length))
      })
  }
}

export const getVideoList = (videoList) => ({type: CHANGE_VIDEOLIST, data: videoList})

export const getVideoListMore = (videoListMore) => ({type: VIDEOLIST_MORE, data: videoListMore})

const videoListItem = (name) => {
  return ({
    casts: name.casts,//演员（数组，内对象）
    title: name.title,//电影名
    genres: name.genres,//标签
    rating: name.rating.average,//评分
    images: name.images.small,//图片
    year: name.year,//上映时间
    directors: name.directors,//导演(数组,内对象)
  })
}

export const AjaxVideoList = (searchName) => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/movie/search?q={${searchName}}&start=1`
    axios.get(url)
      .then(response => {
        dispatch(changeVideoListShow('second'))
        const videoList = response.data.subjects.map((name, key) => {
          return (videoListItem(name))
        })
        dispatch(getVideoList(videoList))
        dispatch(videoListStart(videoList.length))
      })
  }
}

export const AjaxVideoListMore = (searchName, origin = 1) => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/movie/search?q={${searchName}}&start=${origin}`
    axios.get(url)
      .then(response => {
        dispatch(changeVideoListShow('second'))
        const videoList = response.data.subjects.map((name, key) => {
          return (videoListItem(name))
        })
        dispatch(getVideoListMore(videoList))
        dispatch(videoListStartMore(videoList.length))
      })
  }
}

export const AjaxVideoListTop250 = () => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/movie/top250?&start=1`
    axios.get(url)
      .then(response => {
        dispatch(changeVideoListShow('firstEnd'))
        const videoList = response.data.subjects.map((name, key) => {
          return (videoListItem(name))
        })
        dispatch(getVideoList(videoList))
        dispatch(videoListStart(videoList.length))
      })
  }
}

export const AjaxVideoListTop250More = (origin = 1) => {
  return dispatch => {
    //发送ajax请求
    let url = `/v2/movie/top250?&start=${origin}`
    axios.get(url)
      .then(response => {
        dispatch(changeVideoListShow('firstEnd'))
        const videoList = response.data.subjects.map((name, key) => {
          return (videoListItem(name))
        })
        dispatch(getVideoListMore(videoList))
        dispatch(videoListStartMore(videoList.length))
      })
  }
}
//footer的颜色
export const changeColor = (Acolor) => ({type: CHANGE_FOOTER_COLOR, data: Acolor})
//footer的状态位
export const changeFooterState = (foot) => ({type: CHANGE_FOOTER_STATE, data: foot})
