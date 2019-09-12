import React from 'react'
import './item.css'

import Iitem from '../../Interface/Item'

interface Iprops {
  item: Iitem
  deleteItem: (item: Iitem) => void
  changeItem: (item: Iitem) => void
}

const Item = ({ item, deleteItem, changeItem }: Iprops) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeItem({ ...item, completed: e.target.checked })
  }
  return (
    <li className="item">
      <div className="status">
        <input className="checkbox" type="checkbox" checked={item.completed} onChange={handleChange} />
      </div>
      <div className={`title ${item.completed ? 'completed' : ''}`}>{item.title}</div>
      <button className="delete" onClick={(): void => deleteItem(item)}>
        x
      </button>
    </li>
  )
}

export default Item
