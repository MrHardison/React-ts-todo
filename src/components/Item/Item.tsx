import React from 'react'
import './item.sass'

import { Iitem } from '../../Interface'

interface Iprops {
  item: Iitem
  deleteItem: (item: Iitem) => void
  changeItem: (item: Iitem) => void
  editItem: (item: Iitem) => void
}

const Item = ({ item, deleteItem, changeItem, editItem }: Iprops) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeItem({ ...item, completed: e.target.checked })
  }
  return (
    <li className="item">
      <div className="status">
        <input className="checkbox" type="checkbox" checked={item.completed} onChange={handleChange} />
      </div>
      <div className={`title ${item.completed ? 'completed' : ''}`}>{item.title}</div>
      <div className="actions">
        <button className="edit" onClick={(): void => editItem(item)}>
          Edit
        </button>
        <button className="delete" onClick={(): void => deleteItem(item)}>
          &times;
        </button>
      </div>
    </li>
  )
}

export default Item
