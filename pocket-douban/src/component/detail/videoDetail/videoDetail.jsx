//电影详情
import React, { Component } from 'react'

import Header from '../header/header'
import './videoDetail.scss'

export default class VideoDetail extends Component {

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
    return (
      <div>
        <Header history={this.state.history} title={data.title}  headName={headName}/>
        <div className='bigImg'>
          <img src={data.images}/>
        </div>
        <div className='videoListContent'>
          <h1>简介</h1>
          <div>
            <p>名称：{data.title}</p>
            <ul>
              {
                data.genres.filter((el, index) => {
                  return index < 3
                }).map((name, index) => (
                  <li key={index}>{name}</li>
                )) || '未知'
              }
            </ul>
          </div>
          <p>上映时间：{data.year}</p>
          <p>导演：{
            data.directors.filter((el, index) => {
              return index < 2
            }).map((name, index) => (
              name.name + ' '
            )) || '未知'
          }</p>
        </div>
        <div className='videoListActor'>
          <h1>演员</h1>
          <div className='videoListActorContent'>

            {
              data.casts.filter((el, index) => {
                return index < 3
              }).map((name, index) => {
                if (name.avatars === null) {
                  return (
                    <div className='theActor' key={index}>
                      <div className='theWrongImg'>
                        没有图片！
                      </div>
                      <h1>{name.name}</h1>
                    </div>
                  )
                } else if (name.avatars.small) {
                  return (
                    <div className='theActor' key={index}>
                      <img className='theActorImg' src={'https://images.weserv.nl/?url=' + name.avatars.small}/>
                      <h1>{name.name}</h1>
                    </div>
                  )
                }
              }) || '未知'
            }
          </div>
        </div>
      </div>
    )
  }
}