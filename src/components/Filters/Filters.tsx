import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import Filter from '../Filter/Filter'

import './filters.sass'

import { IfiltersReducer } from '../../Interface'

import { actionSelectFilter } from '../../store/actions/filterActions'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: IfiltersReducer) => ({
  filtersList: state.filterReducer.filtersList,
  currentFilter: state.filterReducer.currentFilter
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const Filters = ({ filtersList, currentFilter, dispatch }: Props) => {
  const changeFilter = (type: string) => {
    if (currentFilter !== type) dispatch(actionSelectFilter(type))
  }

  return (
    <ul className="filters">
      {filtersList.map((f, index) => (
        <Filter key={index} filter={f} currentFilter={currentFilter} changeFilter={changeFilter} />
      ))}
    </ul>
  )
}

export default connect(mapStateToProps)(Filters)
