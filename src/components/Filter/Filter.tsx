import React from 'react'
import Ifilter from '../../Interface/Filter'
import './filter.sass'

interface Iprops {
  filter: Ifilter
  changeFilter: (type: string) => void
}

const Filter = ({ filter, changeFilter }: Iprops) => {
  return (
    <div className={`filter ${filter.active ? 'active' : ''}`} onClick={(): void => changeFilter(filter.name)}>
      {filter.name}
    </div>
  )
}

export default Filter
