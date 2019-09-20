import { SELECT_SORTING_TYPE } from '../constants'

export const actionSelectSortingType = (payload: string) => ({
  type: SELECT_SORTING_TYPE,
  payload
})
