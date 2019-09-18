import React from 'react'
import './filter.sass'

interface Iprops {
  filter: string
  currentFilter: string
  changeFilter: (filter: string) => void
}

const Filter = ({ filter, currentFilter, changeFilter }: Iprops) => {
  return (
    <div className={`filter ${filter === currentFilter ? 'active' : ''}`} onClick={() => changeFilter(filter)}>
      {filter}
    </div>
  )
}

export default Filter
