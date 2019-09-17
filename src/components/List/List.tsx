import * as React from 'react'
import Item from '../Item/Item'
import './list.sass'

import { Iitem } from '../../Interface'

interface Iprops {
  list: Array<Iitem>
  deleteItem: (item: Iitem) => void
  changeItem: (item: Iitem) => void
  editItem: (item: Iitem) => void
}

const List = ({ list, deleteItem, changeItem, editItem }: Iprops) => {
  return (
    <ul className="list">
      {list.map(item => (
        <Item key={item.id} item={item} deleteItem={deleteItem} changeItem={changeItem} editItem={editItem} />
      ))}
    </ul>
  )
}

export default List
