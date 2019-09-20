import { SELECT_FILTER } from '../constants'

export const actionSelectFilter = (payload: string) => ({
  type: SELECT_FILTER,
  payload
})
