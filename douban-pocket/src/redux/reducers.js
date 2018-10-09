import { combineReducers } from 'redux'

import {
  GET_INNER,
  CHANGE_BOOKLIST,
  CHANGE_FOOTER_STATE,
  CHANGE_VIDEOLIST,
  CHANGE_MUSICLIST,
  CHANGE_FOOTER_COLOR,
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
    default:
      return state
  }
}

//getMusicList:音乐列表
function getMusicLists (state = [], action) {
  switch (action.type) {
    case CHANGE_MUSICLIST:
      return action.data
    default:
      return state
  }
}

//getVideoList:电影列表
function getVideoLists (state = [], action) {
  switch (action.type) {
    case CHANGE_VIDEOLIST:
      return action.data
    default:
      return state
  }
}

//changeColors:修改footer颜色
function changeColors (state = ['#188eee','#CCCCCC','#CCCCCC'], action) {
  switch (action.type) {
    case CHANGE_FOOTER_COLOR:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  inners, getBookLists, goToFooters,getMusicLists,getVideoLists,changeColors
})