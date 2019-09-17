import React from 'react'
import './filter.sass'

import { Ifilter } from '../../Interface'

interface Iprops {
  filter: Ifilter
  changeFilter: (filter: string) => void
}

const Filter = ({ filter, changeFilter }: Iprops) => {
  return (
    <div className={`filter ${filter.active ? 'active' : ''}`} onClick={() => changeFilter(filter.type)}>
      {filter.type}
    </div>
  )
}

export default Filter
