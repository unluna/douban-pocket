import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './bookItem.scss'

export default class BookItem extends Component {

  static ={
    bookItem:PropTypes.object.isRequired,
  }

  render () {

    const {bookItem}=this.props;
    return (
      <li className='bookList-item'>
        <img className='img' src={bookItem.image}/>
        <div className='list'>
          <div className='name'>名称:{bookItem.title || '未知'}</div>
          <ul className='laber'>
            {
              bookItem.tags.filter((el, index) => {
                return index < 2
              }).map((name, index) => (
                <li key={index}>{name.name}</li>
              )) || '未知'
            }
          </ul>
          <div>
            作者： {
            bookItem.authors.map((name, index) => (
              name + ' '
            )) || '未知'
          }
          </div>
          <div>评分：{bookItem.rating.average || '未知'}</div>
          <div>时间：{bookItem.pubdate || '未知'}</div>
        </div>
      </li>
    )
  }
}
