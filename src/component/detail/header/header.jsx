import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './header.scss'

export default class Header extends Component {

  static = {
    //接受history才能回退
    history: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    headName: PropTypes.string.isRequired,
  }
  //回退
  back = () => {
    this.props.history.goBack()
  }

  render () {

    const {title, headName} = this.props
    return (
      <div className='header'>
        <div className='header-return' onClick={this.back}>
          <div className='icon-undo2 theIcon'/>
          <div className='iconName'>{headName}</div>
        </div>
        <div className='header-name'>{title}</div>
      </div>
    )
  }
}
