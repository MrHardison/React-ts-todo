import * as React from 'react'
import Item from '../Item/Item'
import './list.sass'

import { Iitem } from '../../Interface'

interface Iprops {
  list: Array<Iitem>
}

const List = ({ list }: Iprops) => {
  return (
    <ul className="list">
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default List
