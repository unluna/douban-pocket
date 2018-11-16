import { combineReducers } from 'redux'

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

//inners：输入框获取的文字
function inners (state = '', action) {
  switch (action.type) {
    case GET_INNER:
      return action.data
    default:
      return state
  }
}

//bookListStart:图书ajax请求的起点位置
function bookListStarts (state = 1, action) {
  switch (action.type) {
    case BOOK_REQUEST_START:
      return action.data
    case BOOK_REQUEST_START_MORE:
      return state + action.data
    default:
      return state
  }
}

//musicListStart:音乐ajax请求的起点位置
function musicListStarts (state = 1, action) {
  switch (action.type) {
    case MUSIC_REQUEST_START:
      return action.data
    case MUSIC_REQUEST_START_MORE:
      return state + action.data
    default:
      return state
  }
}

//videoListStart:电影ajax请求的起点位置
function videoListStarts (state = 1, action) {
  switch (action.type) {
    case VIDEO_REQUEST_START:
      return action.data
    case VIDEO_REQUEST_START_MORE:
      return state + action.data
    default:
      return state
  }
}

//bookListShows：图书列表的显示状态
function bookListShows (state = 'first', action) {
  switch (action.type) {
    case BOOKLIST_SHOW:
      return action.data
    default:
      return state
  }
}

//musicListShows：音乐列表的显示状态
function musicListShows (state = 'first', action) {
  switch (action.type) {
    case MUSICLIST_SHOW:
      return action.data
    default:
      return state
  }
}

//videoListShows：电影列表的显示状态
function videoListShows (state = 'first', action) {
  switch (action.type) {
    case VIDEOLIST_SHOW:
      return action.data
    default:
      return state
  }
}

//bookSearchNames：获取搜索的书名
function bookSearchNames (state = 'a', action) {
  switch (action.type) {
    case GET_BOOK_SEARCHNAME:
      return action.data
    default:
      return state
  }
}

//musicSearchNames：获取搜索的音乐名
function musicSearchNames (state = 'a', action) {
  switch (action.type) {
    case GET_MUSIC_SEARCHNAME:
      return action.data
    default:
      return state
  }
}

//videoSearchNames：获取搜索的电影名
function videoSearchNames (state = '', action) {
  switch (action.type) {
    case GET_VIDEO_SEARCHNAME:
      return action.data
    default:
      return state
  }
}

//goToFooter:点击切换footer的状态
function goToFooters (state = 'book', action) {
  switch (action.type) {
    case CHANGE_FOOTER_STATE:
      return action.data
    default:
      return state
  }
}

//getBookList:图书列表
function getBookLists (state = [], action) {
  switch (action.type) {
    case CHANGE_BOOKLIST:
      return action.data
    case BOOKLIST_MORE:
      return [...state, ...action.data]
    default:
      return state
  }
}

//getMusicList:音乐列表
function getMusicLists (state = [], action) {
  switch (action.type) {
    case CHANGE_MUSICLIST:
      return action.data
    case MUSICLIST_MORE:
      return [...state, ...action.data]
    default:
      return state
  }
}

//getVideoList:电影列表
function getVideoLists (state = [], action) {
  switch (action.type) {
    case CHANGE_VIDEOLIST:
      return action.data
    case VIDEOLIST_MORE:
      return [...state, ...action.data]
    default:
      return state
  }
}

//changeColors:修改footer颜色
function changeColors (state = ['#188eee', '#CCCCCC', '#CCCCCC'], action) {
  switch (action.type) {
    case CHANGE_FOOTER_COLOR:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  inners,
  getBookLists,
  goToFooters,
  getMusicLists,
  getVideoLists,
  bookSearchNames,
  musicSearchNames,
  videoSearchNames,
  bookListShows,
  musicListShows,
  videoListShows,
  bookListStarts,
  musicListStarts,
  videoListStarts,
  changeColors
})