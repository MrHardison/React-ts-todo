import { createSelector } from 'reselect'
import { Iroot, Iitem, Ifilter } from '../../Interface'

const list = (state: Iroot) => state.listReducer.list
const filter = (state: Iroot) => state.filterReducer.filtersList.find(f => f.active) || { type: 'All', active: true }

export const getListByFilter = createSelector(
  [filter, list],
  (filter: Ifilter, list: Iitem[]) =>
    list.filter(i => {
      if (filter.type.toLowerCase() === 'all') {
        return i
      } else if (filter.type.toLowerCase() === 'completed') {
        return i.completed
      } else if (filter.type.toLowerCase() === 'active') {
        return !i.completed
      } else {
        return i
      }
    })
)
export const getCompleteCount = createSelector(
  [list],
  (list: Iitem[]) => list.filter(i => i.completed).length
)
