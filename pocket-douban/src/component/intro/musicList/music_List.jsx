//音乐的列表
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './musicList.scss'
import MusicItem from '../../../rooter/musicItem/musicItem'
import MoreMusics from './moreMusics'
import { AjaxMusicList, changeMusicListShow } from '../../../redux/actions'

class MusicList extends Component {

  componentDidMount () {
    const musicListShow = this.props.musicListShows
    if (musicListShow === 'first') {
      this.props.AjaxMusicList()
      this.props.changeMusicListShow('loading')
    }
  }

  render () {
    //获取redux中的列表，如果为空，显示默认值，否则显示数据
    const getMusicLists = this.props.getMusicLists
    if (getMusicLists.length === 0) {
      return (
        <div className='musicList'>
          <div className='status'>客官别慌，精彩音乐马上呈现！长时间没反应说明本店没有客官要的东西...</div>
        </div>
      )
    } else {
      return (
        <div className='musicList'>
          <ul className='musicList-content'>
            {
              getMusicLists.map((name, index) => {
                let path = {
                  pathname: '/Detail/MusicDetail',
                  state: name,
                  headName: '乐',
                }
                //进入详情页
                return (
                  <NavLink to={path} key={index}>
                    <MusicItem musicItem={name}/>
                  </NavLink>
                )
              })
            }
            <MoreMusics/>
          </ul>
        </div>
      )
    }
  }
}

MusicList.propTypes = {
  getMusicLists: PropTypes.array.isRequired,
  musicListShows: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  getMusicLists: state.getMusicLists,
  musicListShows: state.musicListShows,
})

export default connect(
  mapStateToProps,
  {AjaxMusicList, changeMusicListShow}
)(MusicList)