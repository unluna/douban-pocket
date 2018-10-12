//电影的列表
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './videoList.scss'
import VideoItem from '../../../rooter/videoItem/videoItem'
import MoreVideos from './moreVideos'
import {
  AjaxVideoListTop250,
  AjaxVideoListTop250More,
  changeVideoListShow,
} from '../../../redux/actions'

class VideoList extends Component {
  componentDidMount () {
    const videoListShow = this.props.videoListShows
    if (videoListShow === 'first') {
      this.props.changeVideoListShow('loading')
      this.props.AjaxVideoListTop250()
    }
  }

  render () {
    //获取redux中的列表，如果为空，显示默认值，否则显示数据
    const getVideoLists = this.props.getVideoLists

    if (getVideoLists.length === 0) {
      return (
        <div className='videoList'>
          <div className='status'>客官别慌，精彩电影马上呈现！长时间没反应说明本店没有客官要的东西...</div>
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
                    headName: '影'
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
            <MoreVideos/>
          </ul>
        </div>
      )
    }
  }
}

VideoList.propTypes = {
  getVideoLists: PropTypes.array.isRequired,
  videoListShows: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  getVideoLists: state.getVideoLists,
  videoListShows: state.videoListShows,
})

export default connect(
  mapStateToProps,
  {AjaxVideoListTop250, AjaxVideoListTop250More, changeVideoListShow}
)(VideoList)