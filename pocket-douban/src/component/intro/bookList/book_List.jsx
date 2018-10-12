//书的列表
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './bookList.scss'
import BookItem from '../../../rooter/bookItem/bookItem'
import MoreBooks from './moreBooks'
import { AjaxBookList, changeBookListShow } from '../../../redux/actions'

class BookList extends Component {

  //初始数据展示
  componentDidMount () {
    const bookListShow = this.props.bookListShows
    if (bookListShow === 'first') {
      this.props.AjaxBookList()
      this.props.changeBookListShow('loading')
    }
  }

  render () {
    //获取redux中的列表，如果为空，显示默认值，否则显示数据
    const getBookLists = this.props.getBookLists
    if (getBookLists.length === 0) {
      return (
        <div className='bookList'>
          <div className='status'>客官别慌，精彩书籍马上呈现！长时间没反应说明本店没有客官要的东西...</div>
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
                  headName: '书'
                }
                //进入详情页
                return (
                  <NavLink to={path} key={index}>
                    <BookItem bookItem={name}/>
                  </NavLink>
                )
              })
            }
            <MoreBooks/>
          </ul>
        </div>
      )
    }
  }
}

BookList.propTypes = {
  getBookLists: PropTypes.array.isRequired,
  bookListShows: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  getBookLists: state.getBookLists,
  bookListShows: state.bookListShows,
})

export default connect(
  mapStateToProps,
  {AjaxBookList, changeBookListShow}
)(BookList)
