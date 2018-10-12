import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './bookItem.scss'

export default class BookItem extends Component {

  static = {
    bookItem: PropTypes.object.isRequired,
  }

  render () {

    const {bookItem} = this.props
    const tags = bookItem.tags || ['未知']
    const authors = bookItem.authors || ['未知']
    const average = bookItem.rating.average || ['未知']
    const pubdate = bookItem.pubdate || ['未知']
    return (
      <li className='bookList-item'>
        <img className='img' src={bookItem.image}/>
        <div className='list'>
          <div className='name'>名称:{bookItem.title || '未知'}</div>
          <ul className='laber'>
            {
              tags.filter((el, index) => {
                return index < 2
              }).map((name, index) => (
                <li key={index}>{name.name}</li>
              ))
            }
          </ul>
          <div>
            作者： {
            authors.map((name, index) => (
              name + ' '
            ))
          }
          </div>
          <div>评分：{average}</div>
          <div>时间：{pubdate}</div>
        </div>
      </li>
    )
  }
}
