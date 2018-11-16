import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './musicItem.scss'

export default class MusicItem extends Component {

  static = {
    musicItem: PropTypes.object.isRequired,
  }

  render () {

    const {musicItem} = this.props
    const author= musicItem.author||['未知']
    return (
      <li className='musicList-item'>
        <img className='img' src={musicItem.image}/>
        <div className='list'>
          <div className='name'>名称:{musicItem.title}</div>
          <div>作者：{author.map((name, index) => (
            name.name + ' '
          )) || '未知'}</div>
          <div>评分：{musicItem.rating}</div>
        </div>
      </li>
    )
  }
}
