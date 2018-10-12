//加载更多书籍的<ul>content最底部的组件
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AjaxBookListMore, bookListStart, changeBookListShow } from '../../../redux/actions'

class MoreBooks extends Component {

  componentDidMount () {
    const wrapper = this.div
    let timeoutId

    let callback = () => {
      //获取到按钮离顶部的距离
      let top = wrapper.getBoundingClientRect().top
      let windowHeight = window.screen.height
      if (top && top < windowHeight) {
        // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了.
        this.props.changeBookListShow('loading')
        let bookSearchName = this.props.bookSearchNames
        let start = this.props.bookListStarts + 1
        //发送请求
        this.props.AjaxBookListMore(bookSearchName, start)
      }
    }

    window.addEventListener('scroll', function () {
      if (this.props.bookListShows==='loading') {
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
      <div className='bookList-more' ref={div => {this.div = div}}>客官到底了！</div>
    )
  }
}

MoreBooks.propTypes = {
  bookSearchNames: PropTypes.string.isRequired,
  bookListStarts: PropTypes.number.isRequired,
  bookListShows: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  bookSearchNames: state.bookSearchNames,
  bookListStarts: state.bookListStarts,
  bookListShows: state.bookListShows,
})

export default connect(
  mapStateToProps,
  {AjaxBookListMore, bookListStart, changeBookListShow}
)(MoreBooks)
