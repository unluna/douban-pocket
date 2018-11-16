//加载更多音乐的<ul>content最底部的组件
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AjaxMusicListMore, changeMusicListShow, musicListStart } from '../../../redux/actions'

class MoreMusics extends Component {

  componentDidMount () {
    const wrapper = this.div
    let timeoutId

    let callback = () => {
      //获取到按钮离顶部的距离
      let top = wrapper.getBoundingClientRect().top
      let windowHeight = window.screen.height
      if (top && top < windowHeight) {
        // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
        this.props.changeMusicListShow('loading')
        let musicSearchName = this.props.musicSearchNames
        let start = this.props.musicListStarts + 1
        //发送请求
        this.props.AjaxMusicListMore(musicSearchName, start)
      }
    }

    window.addEventListener('scroll', function () {
      if (this.props.musicListShows==='loading') {
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
      <div className='musicList-more' ref={div => {this.div = div}}>客官到底了！</div>
    )
  }
}

MoreMusics.propTypes = {
  musicSearchNames: PropTypes.string.isRequired,
  musicListStarts: PropTypes.number.isRequired,
  musicListShows: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  musicSearchNames: state.musicSearchNames,
  musicListStarts: state.musicListStarts,
  musicListShows: state.musicListShows,
})

export default connect(
  mapStateToProps,
  {AjaxMusicListMore, musicListStart, changeMusicListShow}
)(MoreMusics)
