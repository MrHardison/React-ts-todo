import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import List from '../components/List/List'
import AddForm from '../components/AddForm/AddForm'
import Filters from '../components/Filters/Filters'

import { getListByFilter, getCompleteCount } from '../store/selectors/listSelector'

import { actionToggleAll, actionClearCompleted } from '../store/actions/listActions'

import { Iroot } from '../Interface'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Iroot) => ({
  list: getListByFilter(state),
  completedCount: getCompleteCount(state),
  fullListlength: state.listReducer.list.length
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const App = ({ list, completedCount, fullListlength, dispatch }: Props) => {
  const itemLeftCount = fullListlength - completedCount

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actionToggleAll(e.target.checked))
  }

  const clearCompleted = () => {
    dispatch(actionClearCompleted())
  }

  return (
    <div className="container">
      <div className="wrapper">
        <AddForm />
        {list.length ? (
          <>
            <List list={list} />
            <div className="info-wrapper">
              <div className="toggle-all">
                <label className="label" htmlFor="toggler">
                  {completedCount === list.length ? 'Uncomplete' : 'Complete'} all
                </label>
                <input
                  id="toggler"
                  className="checkbox"
                  type="checkbox"
                  checked={completedCount === list.length}
                  onChange={toggleAll}
                />
              </div>
              {list.filter(item => item.completed).length ? (
                <div className="clear-completed" onClick={clearCompleted}>
                  Clear completed
                </div>
              ) : null}
              <div className="left-count">
                <span className={`count ${itemLeftCount === 0 ? 'red' : ''}`}>{itemLeftCount}</span>{' '}
                {itemLeftCount === 1 ? 'item' : 'items'} left
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
