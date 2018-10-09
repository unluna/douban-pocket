import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './footer.scss'
import { changeFooterState ,changeColor} from '../../redux/actions'

class Footer extends Component {

  //大致思路就是点击不同的footer更新状态，更新颜色
  state = {
    bookStyle: '#188eee',
    musicStyle: '#CCCCCC',
    videoStyle: '#CCCCCC',
  }

  changeToBook = () => {
    this.props.changeFooterState('book')
    this.props.changeColor(['#188eee', '#CCCCCC', '#CCCCCC',])
  }

  changeToMusic = () => {
    this.props.changeFooterState('music')
    this.props.changeColor(['#CCCCCC', '#188eee', '#CCCCCC',])
  }

  changeToVideo = () => {
    this.props.changeFooterState('video')
    this.props.changeColor(['#CCCCCC', '#CCCCCC', '#188eee',])
  }

  render () {
    const {changeColors}=this.props
    return (
      <div className='footer'>
        <NavLink to='/intro/bookList'>
          <div className='btn' onClick={this.changeToBook}>
            <div className='icon-book theIcon' style={{color: changeColors[0]}}/>
            <div className='iconName' style={{color: changeColors[0]}}>图书</div>
          </div>
        </NavLink>
        <NavLink to='/intro/musicList'>
          <div className='btn' onClick={this.changeToMusic}>
            <div className='icon-headphones theIcon' style={{color: changeColors[1]}}/>
            <div className='iconName' style={{color: changeColors[1]}}>音乐</div>
          </div>
        </NavLink>
        <NavLink to='/intro/videoList'>
          <div className='btn' onClick={this.changeToVideo}>
            <div className='icon-video-camera theIcon' style={{color: changeColors[2]}}/>
            <div className='iconName' style={{color: changeColors[2]}}>电影</div>
          </div>
        </NavLink>
      </div>
    )
  }
}

Footer.propTypes = {
  goToFooters: PropTypes.string.isRequired,
  changeColors:PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  goToFooters: state.goToFooters,
  changeColors:state.changeColors,
})

export default connect(
  mapStateToProps,
  {changeFooterState,changeColor}
)(Footer)