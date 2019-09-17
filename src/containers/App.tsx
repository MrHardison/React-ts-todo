import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import List from '../components/List/List'
import Add from '../components/Add/Add'
import Filters from '../components/Filters/Filters'

import { getListByFilter } from '../store/selectors/listSelector'

import { actionDeleteItem, actionToggleItem, actionToggleEditItem } from '../store/actions/listActions'

import { Iitem, Iroot } from '../Interface'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Iroot) => ({
  list: getListByFilter(state)
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const App = ({ list, dispatch }: Props) => {
  const deleteItem = (item: Iitem): void => {
    dispatch(actionDeleteItem(item))
  }

  const toggleItem = (item: Iitem): void => {
    dispatch(actionToggleItem(item))
  }

  const editItem = (item: Iitem): void => {
    dispatch(actionToggleEditItem({ id: item.id, title: item.title }))
  }

  return (
    <div className="container">
      <Add />
      {list.length ? (
        <List list={list} deleteItem={deleteItem} changeItem={toggleItem} editItem={editItem} />
      ) : (
        <div className="empty-list">List is empty</div>
      )}
      <Filters />
    </div>
  )
}

export default connect(mapStateToProps)(App)
