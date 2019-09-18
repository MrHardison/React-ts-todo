import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import List from '../components/List/List'
import AddForm from '../components/AddForm/AddForm'
import Filters from '../components/Filters/Filters'

import { getListByFilter, getCompleteCount, getFullListLength } from '../store/selectors/listSelector'

import { actionDeleteItem, actionToggleItem, actionToggleEditItem, actionToggleAll } from '../store/actions/listActions'

import { Iitem, Iroot } from '../Interface'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Iroot) => ({
  list: getListByFilter(state),
  completedCount: getCompleteCount(state),
  fullListlength: getFullListLength(state)
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const App = ({ list, completedCount, fullListlength, dispatch }: Props) => {
  const deleteItem = (item: Iitem): void => {
    dispatch(actionDeleteItem(item.id))
  }

  const toggleItem = (item: Iitem): void => {
    dispatch(actionToggleItem(item))
  }

  const editItem = (item: Iitem): void => {
    dispatch(actionToggleEditItem({ id: item.id, title: item.title, priority: item.priority }))
  }

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(actionToggleAll(e.target.checked))
  }

  return (
    <div className="container">
      <div className="wrapper">
        <AddForm />
        {list.length ? (
          <>
            <List list={list} deleteItem={deleteItem} changeItem={toggleItem} editItem={editItem} />
            <div className="info-wrapper">
              <div className="toggle-all">
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
              <div className="left-count">
                <span className={fullListlength - completedCount === 0 ? 'count red' : 'count'}>
                  {fullListlength - completedCount}
                </span>{' '}
                {fullListlength - completedCount === 1 ? 'item' : 'items'} left
              </div>
            </div>
          </>
        ) : (
          <div className="empty-list">List is empty</div>
        )}
        <Filters />
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(App)
