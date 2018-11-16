import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './videoItem.scss'

export default class VideoItem extends Component {

  static = {
    videoItem: PropTypes.object.isRequired,
  }

  render () {

    const {videoItem} = this.props
    return (
      <li className='videoList-item'>
        <img className='img' src={videoItem.images}/>
        <div className='list'>
          <div className='name'>名称:{videoItem.title || '未知'}</div>
          <ul className='laber'>
            {
              videoItem.genres.filter((el, index) => {
                return index < 3
              }).map((name, index) => (
                <li key={index}>{name}</li>
              )) || '未知'
            }
          </ul>
          <div>{
            videoItem.casts.filter((el, index) => {
              return index < 2
            }).map((name, index) => (
              name.name + ' '
            )) || '未知'
          }</div>
          <div>评分：{videoItem.rating || '未知'}</div>
        </div>
      </li>
    )
  }
}
