import { SELECT_FILTER } from '../constants'

export const actionSelectFilter = (type: string) => ({
  type: SELECT_FILTER,
  payload: type
})
