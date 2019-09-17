import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import List from '../components/List/List'
import Add from '../components/AddForm/AddForm'
import Filters from '../components/Filters/Filters'

import { getListByFilter, getCompleteCount } from '../store/selectors/listSelector'

import { actionDeleteItem, actionToggleItem, actionToggleEditItem, actionToggleAll } from '../store/actions/listActions'

import { Iitem, Iroot } from '../Interface'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Iroot) => ({
  list: getListByFilter(state),
  completedCount: getCompleteCount(state)
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const App = ({ list, completedCount, dispatch }: Props) => {
  const deleteItem = (item: Iitem): void => {
    dispatch(actionDeleteItem(item))
  }

  const toggleItem = (item: Iitem): void => {
    dispatch(actionToggleItem(item))
  }

  const editItem = (item: Iitem): void => {
    dispatch(actionToggleEditItem({ id: item.id, title: item.title }))
  }

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(actionToggleAll(e.target.checked))
  }

  return (
    <div className="container">
      <Add />
      {list.length ? (
        <>
          <List list={list} deleteItem={deleteItem} changeItem={toggleItem} editItem={editItem} />
          <div className="toggleAll">
            <label className="label" htmlFor="toggler">
              {completedCount === list.length ? 'Uncomplete' : 'Complete'} all
            </label>
            <input
              id="toggler"
              className="checkbox"
              type="checkbox"
              checked={completedCount === list.length ? true : false}
              onChange={toggleAll}
            />
          </div>
        </>
      ) : (
        <div className="empty-list">List is empty</div>
      )}
      <Filters />
    </div>
  )
}

export default connect(mapStateToProps)(App)
