//列表页顶部的搜索
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  getInner,
  AjaxBookList,
  AjaxVideoList,
  AjaxMusicList,
  getBookSearchName,
  getMusicSearchName,
  getVideoSearchName,
  bookListStart,
  musicListStart,
  videoListStart,
  changeVideoListShow,
} from '../../../redux/actions'
import './search.scss'

//大体的逻辑就是点击按钮的时候根据底部footer的不同状态去发送不同的Ajax请求，
class Search extends Component {

  changeContent = (ev) => {
    this.props.getInner(ev.target.value.trim())
  }

  search = () => {
    const inner = this.props.inners
    const footerState = this.props.goToFooters
    if (inner) {
      //发送请求
      if (footerState === 'book') {
        this.props.getBookSearchName(inner)
        this.props.AjaxBookList(inner)
        this.props.bookListStart(1)
      }
      else if (footerState === 'music') {
        this.props.getMusicSearchName(inner)
        this.props.AjaxMusicList(inner)
        this.props.musicListStart(1)
      }
      else if (footerState === 'video') {
        this.props.getVideoSearchName(inner)
        this.props.AjaxVideoList(inner)
        this.props.videoListStart(1)
        if(this.props.videoListShows==='first'){
          this.props.changeVideoListShow('second')
        }
      }
    }
  }

  render () {
    const inners = this.props.inners
    return (
      <div className='search'>
        <div className='search-content'>
          <div className='search-item'>
            <div className='icon-search'/>
            <input type="text" placeholder='请输入你想查询的内容：' value={inners} onChange={this.changeContent}/>
          </div>
          <div className='button' onClick={this.search}>搜索</div>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  inners: PropTypes.string.isRequired,
  goToFooters: PropTypes.string.isRequired,
  videoListShows: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  inners: state.inners,
  goToFooters: state.goToFooters,
  videoListShows: state.videoListShows,
})

export default connect(
  mapStateToProps,
  {
    getInner,
    AjaxBookList,
    AjaxVideoList,
    AjaxMusicList,
    getBookSearchName,
    getMusicSearchName,
    getVideoSearchName,
    bookListStart,
    musicListStart,
    videoListStart,
    changeVideoListShow
  }
)(Search)
