import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Search from './search/search'
import BookList from './bookList/book_List'
import MusicList from './musicList/music_List'
import VideoList from './videoList/video_List'
import Footer from '../../rooter/footer/footer'
import './intro.scss'

export default class Intro extends Component {
  render () {
    return (
      <div>
        <Search/>
        <Switch>
          <Route path='/intro/bookList' component={BookList}/>
          <Route path='/intro/musicList' component={MusicList}/>
          <Route path='/intro/videoList' component={VideoList}/>
          <Redirect to='/intro/bookList'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
