import React from 'react'
import Filter from '../Filter/Filter'
import Ifilter from '../../Interface/Filter'
import './filters.css'

interface Iprops {
  filters: Array<Ifilter>
  changeFilter: (type: string) => void
}

const Filters = ({ filters, changeFilter }: Iprops) => {
  return (
    <ul className="filters">
      {filters.map((f, index) => (
        <Filter key={index} filter={f} changeFilter={changeFilter} />
      ))}
    </ul>
  )
}

export default Filters
