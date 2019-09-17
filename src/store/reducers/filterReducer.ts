import { IfiltersObj } from '../../Interface'
import { SELECT_FILTER } from '../constants'

interface Iprops {
  type: string
  payload: string
}

const initialState: IfiltersObj = {
  filtersList: [
    {
      type: 'All',
      active: true
    },
    {
      type: 'Active',
      active: false
    },
    {
      type: 'Completed',
      active: false
    }
  ]
}

const filterReducer = (state = initialState, { type, payload }: Iprops) => {
  switch (type) {
    case SELECT_FILTER:
      return {
        ...state,
        filtersList: state.filtersList.map(f => {
          if (f.type === payload) {
            f.active = true
          } else {
            f.active = false
          }
          return f
        })
      }

    default:
      return state
  }
}

export default filterReducer
