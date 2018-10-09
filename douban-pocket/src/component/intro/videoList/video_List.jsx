//电影的列表
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './videoList.scss'
import VideoItem from '../../../rooter/videoItem/videoItem'

class VideoList extends Component {

  render () {
    //获取redux中的列表，如果为空，显示默认值，否则显示数据
    const getVideoLists = this.props.getVideoLists

    if (getVideoLists.length===0) {
      return (
        <div className='videoList'>
          <div className='status'>快来搜索您想看的电影吧！</div>
        </div>
      )
    } else {
      return (
        <div className='videoList'>
          <ul className='videoList-content'>
            {
              getVideoLists.map(
                (name, index) => {
                  let path = {
                    pathname: '/Detail/VideoDetail',
                    state: name,
                    headName:'影'
                  }
                  //进入详情页
                  return (
                    <NavLink to={path} key={index}>
                      <VideoItem videoItem={name}/>
                    </NavLink>
                  )
                }
              )
            }
          </ul>
        </div>
      )
    }
  }
}

VideoList.propTypes = {
  getVideoLists: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  getVideoLists: state.getVideoLists,
})

export default connect(
  mapStateToProps
)(VideoList)