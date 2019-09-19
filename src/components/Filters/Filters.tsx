import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Filter from '../Filter/Filter'

import './filters.sass'

import { Ifilters } from '../../Interface'

import { actionSelectFilter } from '../../store/actions/filterActions'
import { actionSelectSortingType } from '../../store/actions/sortAction'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Ifilters) => ({
  filtersList: state.filterReducer.filtersList,
  currentFilter: state.filterReducer.currentFilter,
  sortList: state.sortReducer.sortTypes,
  currentSortType: state.sortReducer.currentSortType
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const Filters = ({ filtersList, currentFilter, sortList, currentSortType, dispatch }: Props) => {
  const changeFilter = (type: string) => {
    if (filtersList.includes(type)) {
      if (currentFilter !== type) dispatch(actionSelectFilter(type))
    } else if (sortList.includes(type)) {
      if (currentSortType !== type) dispatch(actionSelectSortingType(type))
    }
  }

  return (
    <div className="filters">
      <div className="filter-wrap">
        <p className="text">Filter by status:</p>
        <ul className="filters-list">
          {filtersList.map((f, index) => (
            <Filter key={index} filter={f} currentFilter={currentFilter} changeFilter={changeFilter} />
          ))}
        </ul>
      </div>
      <div className="filter-wrap">
        <p className="text">Filter by priority:</p>
        <ul className="sort-list">
          {sortList.map((s, index) => (
            <li
              key={index}
              className={`sort-item ${currentSortType === s ? 'active' : ''}`}
              onClick={() => changeFilter(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Filters)
