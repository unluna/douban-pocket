//书籍详情
import React, { Component } from 'react'

import Header from '../header/header'
import './bookDetail.scss'

export default class BookDetail extends Component {

  state = {
    history: '',
  }

  //大致就是把history传给header来进行回退操作
  componentDidMount () {
    const history = this.props.history
    this.setState({history})
  }

  render () {
    //传进来数据
    const data = this.props.location.state;
    const headName = this.props.location.headName;
    return (
      <div>
        <Header history={this.state.history}  title={data.title} headName={headName}/>
        <div className='bookDetailContent'>
          <img className='bookImg' src={data.image}/>
          <ul className='bookIntro'>
            <li>名称：{data.title || '未知'}</li>
            <li>作者：{
              data.authors.map((name, index) => (
                name + ' '
              )) || '未知'
            }</li>
            <li>出版社：{data.publisher || '未知'}</li>
            <li>日期：{data.pubdate || '未知'}</li>
            <li>评分：{data.rating.average || '未知'}</li>
            <li>价钱：{data.price || '未知'}</li>
            <ul className='bookLabel'>
              {
                data.tags.filter((el, index) => {
                  return index < 2
                }).map((name, index) => (
                  <li key={index}>{name.name}</li>
                )) || '未知'
              }
            </ul>
          </ul>
        </div>
        <div className='bookContent'>
          <h1>序言</h1>
          <p>{data.catalog || '未知'}</p>
        </div>
        <div className='bookContent'>
          <h1>简介</h1>
          <p>{data.summary || '未知'}</p>
        </div>
      </div>
    )
  }
}
