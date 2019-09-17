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
  filtersList: state.filterReducer.filtersList
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const Filters = ({ filtersList, dispatch }: Props) => {
  const changeFilter = (type: string) => {
    const selectedFilter = filtersList.find(f => f.type === type)
    if (selectedFilter && !selectedFilter.active) dispatch(actionSelectFilter(type))
  }

  return (
    <ul className="filters">
      {filtersList.map((f, index) => (
        <Filter key={index} filter={f} changeFilter={changeFilter} />
      ))}
    </ul>
  )
}

export default connect(mapStateToProps)(Filters)
