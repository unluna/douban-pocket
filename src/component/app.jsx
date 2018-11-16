//根组件，并列着列表和三个详情页（详情页没合并是为展现两种方式）
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Intro from './intro/intro'
import BookDetail from './detail/bookDetail/bookDetail'
import MusicDetail from './detail/musicDetail/musicDetail'
import VideoDetail from './detail/videoDetail/videoDetail'

import '../common.scss'

export default class App extends Component {

  render () {
    return (
      <div className={'app'}>
        <Switch>
          <Route path='/Intro' component={Intro}/>
          <Route path='/Detail/BookDetail' component={BookDetail}/>
          <Route path='/Detail/MusicDetail' component={MusicDetail}/>
          <Route path='/Detail/VideoDetail' component={VideoDetail}/>
          <Redirect to='/Intro'/>
        </Switch>
      </div>
    )
  }
}
