import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import './item.sass'

import { Iitem } from '../../Interface'
import { actionDeleteItem, actionToggleItem, actionToggleEditItem } from '../../store/actions/listActions'

interface Iprops {
  item: Iitem
  dispatch: Dispatch
}

const Item = ({ item, dispatch }: Iprops) => {
  const deleteItem = () => {
    dispatch(actionDeleteItem(item.id))
  }

  const toggleItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actionToggleItem(item.id, e.target.checked))
  }

  const editItem = () => {
    dispatch(actionToggleEditItem({ id: item.id, title: item.title, priority: item.priority }))
  }

  return (
    <li className={`item ${item.priority}`}>
      <label htmlFor={`itemToggler_${item.id}`} className="item-mask" />
      <div className="status">
        <input
          id={`itemToggler_${item.id}`}
          className="checkbox"
          type="checkbox"
          checked={item.completed}
          onChange={toggleItem}
        />
      </div>
      <div className={`title ${item.completed ? 'completed' : ''}`}>{item.title}</div>
      <div className="actions">
        <button className="edit" onClick={editItem}>
          Edit
        </button>
        <button className="delete" onClick={deleteItem}>
          &times;
        </button>
      </div>
    </li>
  )
}

export default connect()(Item)
