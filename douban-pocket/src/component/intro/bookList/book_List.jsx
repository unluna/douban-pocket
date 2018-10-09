//书的列表
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './bookList.scss'
import BookItem from '../../../rooter/bookItem/bookItem'

class BookList extends Component {

  render () {
    //获取redux中的列表，如果为空，显示默认值，否则显示数据
    const getBookLists = this.props.getBookLists
    if (getBookLists.length === 0) {
      return (
        <div className='bookList'>
          <div className='status'>快来搜索您想看的书吧！</div>
        </div>
      )
    } else {
      return (
        <div className='bookList'>
          <ul className='bookList-content'>
            {
              getBookLists.map((name, index) => {
                let path = {
                  pathname: '/Detail/BookDetail',
                  state: name,
                  headName:'书'
                }
                //进入详情页
                return (
                  <NavLink to={path} key={index}>
                    <BookItem bookItem={name}/>
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

BookList.propTypes = {
  getBookLists: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  getBookLists: state.getBookLists,
})

export default connect(
  mapStateToProps
)(BookList)
