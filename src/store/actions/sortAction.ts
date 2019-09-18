import { SELECT_SORTING_TYPE } from '../constants'

export const actionSelectSortingType = (type: string) => ({
  type: SELECT_SORTING_TYPE,
  payload: type
})
