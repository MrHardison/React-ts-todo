import * as React from 'react'
import Item from '../Item/Item'
import './list.sass'

import Iitem from '../../Interface/Item'

interface Iprops {
  list: Array<Iitem>
  deleteItem: (item: Iitem) => void
  changeItem: (item: Iitem) => void
}

const List = ({ list, deleteItem, changeItem }: Iprops) => {
  return (
    <ul className="list">
      {list.map(item => (
        <Item key={item.id} item={item} deleteItem={deleteItem} changeItem={changeItem} />
      ))}
    </ul>
  )
}

export default List
