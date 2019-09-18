import { IfiltersObj } from '../../Interface'
import { SELECT_FILTER } from '../constants'

interface Iprops {
  type: string
  payload: string
}

const initialState: IfiltersObj = {
  filtersList: ['All', 'Active', 'Completed'],
  currentFilter: 'All'
}

const filterReducer = (state = initialState, { type, payload }: Iprops) => {
  switch (type) {
    case SELECT_FILTER:
      return {
        ...state,
        currentFilter: payload
      }

    default:
      return state
  }
}

export default filterReducer
