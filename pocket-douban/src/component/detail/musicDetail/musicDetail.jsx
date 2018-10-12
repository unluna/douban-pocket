//音乐详情
import React, { Component } from 'react'

import Header from '../header/header'
import './musicDetail.scss'

export default class MusicDetail extends Component {

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
    const data = this.props.location.state
    const headName = this.props.location.headName

    const tracks = data.tracks || ['未知']
    const pubdate = data.pubdate || ['未知']
    const author = data.author || ['未知']
    const publisher = data.publisher || ['未知']

    return (
      <div>
        <Header history={this.state.history} title={data.title} headName={headName}/>
        <div className='musicDetailContent'>
          <img className='musicImg' src={data.image}/>
          <ul className='musicIntro'>
            <li>名称：{data.title}</li>
            <li>作者：作者：{author.map((name, index) => (
              name.name + ' '
            )) || '未知'}</li>
            <li>发布商：{publisher.map((name, index) => (
              name + ' '
            )) || '未知'}</li>
            <li>发布时间：{pubdate.map((name, index) => (name + ' '))}</li>
            <li>评分：{data.rating}</li>
            <ul className='musicLabel'>
              {
                data.tags.filter((el, index) => {
                  return index < 3
                }).map((name, index) => (
                  <li key={index}>{name.name}</li>
                )) || '未知'
              }
            </ul>
          </ul>
        </div>
        <div className='musicContent'>
          <h1>简介</h1>
          <p>{tracks.map((name, index) => (
            name + ' '
          ))}</p>
        </div>
      </div>
    )
  }
}