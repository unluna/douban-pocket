//加载更多电影的<ul>content最底部的组件
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AjaxVideoListMore, AjaxVideoListTop250More, changeVideoListShow, videoListStart } from '../../../redux/actions'

class MoreVideos extends Component {

  componentDidMount () {
    const wrapper = this.div
    let timeoutId

    let callback = () => {
      //获取到按钮离顶部的距离
      let top = wrapper.getBoundingClientRect().top
      let windowHeight = window.screen.height
      if (top && top < windowHeight) {
        // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
        let videoSearchName = this.props.videoSearchNames
        let start = this.props.videoListStarts + 1

        if (this.props.videoListShows === 'firstEnd') {
          this.props.changeVideoListShow('loading')
          //发送请求
          this.props.AjaxVideoListTop250More(start)
        } else {
          this.props.changeVideoListShow('loading')
          //发送请求
          this.props.AjaxVideoListMore(videoSearchName, start)
        }
      }
    }

    window.addEventListener('scroll', function () {
      if (this.props.videoListShows==='loading') {
        return
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      //如果在50ms 以内没有执行scroll 就会执行callBack，如果有下一次滚动，定时器就会被清空
      timeoutId = setTimeout(callback, 50)
    }.bind(this), false)
  }

  render () {
    return (
      <div className='videoList-more' ref={div => {this.div = div}}>客官到底了！</div>
    )
  }
}

MoreVideos.propTypes = {
  videoSearchNames: PropTypes.string.isRequired,
  videoListStarts: PropTypes.number.isRequired,
  videoListShows: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  videoSearchNames: state.videoSearchNames,
  videoListStarts: state.videoListStarts,
  videoListShows: state.videoListShows,
})

export default connect(
  mapStateToProps,
  {AjaxVideoListMore,AjaxVideoListTop250More, videoListStart,changeVideoListShow}
)(MoreVideos)
