import { createSelector } from 'reselect'
import { Iroot, Iitem, Ifilter } from '../../Interface'

const list = (state: Iroot) => state.listReducer.list
const filter = (state: Iroot) => state.filterReducer.filtersList.find(f => f.active) || { type: 'All', active: true }

export const getListByFilter = createSelector(
  [filter, list],
  (filter: Ifilter, list: Iitem[]) =>
    list.filter(item => {
      if (filter.type.toLowerCase() === 'all') {
        return item
      } else if (filter.type.toLowerCase() === 'completed') {
        return item.completed
      } else if (filter.type.toLowerCase() === 'active') {
        return !item.completed
      } else {
        return item
      }
    })
)
export const getCompleteCount = createSelector(
  [list],
  (list: Iitem[]) => list.filter(i => i.completed).length
)

export const getFullListLength = createSelector(
  [list],
  (list: Iitem[]) => list.length
)
