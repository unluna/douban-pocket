//音乐的列表
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './musicList.scss'
import MusicItem from '../../../rooter/musicItem/musicItem'

class MusicList extends Component {

  render () {
    //获取redux中的列表，如果为空，显示默认值，否则显示数据
    const getMusicLists = this.props.getMusicLists
    if (getMusicLists.length === 0) {
      return (
        <div className='musicList'>
          <div className='status'>快来搜索您想听的音乐吧！</div>
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
                  headName:'乐',
                }
                //进入详情页
                return (
                  <NavLink to={path} key={index}>
                    <MusicItem musicItem={name}/>
                  </NavLink>
                )
              })
            }
          </ul>
        </div>
      )
    }
  }
}

MusicList.propTypes = {
  getMusicLists: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  getMusicLists: state.getMusicLists,
})

export default connect(
  mapStateToProps
)(MusicList)