import { IsortListObj } from '../../Interface'
import { SELECT_SORTING_TYPE } from '../constants'

interface Iprops {
  type: string
  payload: string
}

const initialState: IsortListObj = {
  sortTypes: ['none', 'high', 'medium', 'low'],
  currentSortType: 'none'
}

const sortReducer = (state = initialState, { type, payload }: Iprops) => {
  switch (type) {
    case SELECT_SORTING_TYPE:
      return {
        ...state,
        currentSortType: payload
      }

    default:
      return state
  }
}
export default sortReducer
