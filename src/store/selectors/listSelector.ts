import { createSelector } from 'reselect'
import { Iroot, Iitem } from '../../Interface'

const getList = (state: Iroot) =>
  state.listReducer.list.sort((a, b) => {
    if (
      (a.priority === 'high' && b.priority === 'medium') ||
      (a.priority === 'high' && b.priority === 'low') ||
      (a.priority === 'medium' && b.priority === 'low')
    ) {
      return -1
    }
    return 0
  })
const getCurrentfilter = (state: Iroot) => state.filterReducer.currentFilter
const getPriorityType = (state: Iroot) => state.sortReducer.currentSortType

export const getListByFilter = createSelector(
  [getCurrentfilter, getList, getPriorityType],
  (filterType: string, list: Iitem[], priorityType: string) =>
    list
      .filter(item => {
        switch (filterType.toLowerCase()) {
          case 'all':
            return item

          case 'completed':
            return item.completed

          case 'active':
            return !item.completed

          default:
            return item
        }
      })
      .filter(item => {
        switch (priorityType) {
          case 'high':
            return item.priority === 'high'

          case 'medium':
            return item.priority === 'medium'

          case 'low':
            return item.priority === 'low'

          case 'none':
            return item

          default:
            return item
        }
      })
)
export const getCompleteCount = createSelector(
  [getList],
  (list: Iitem[]) => list.filter(i => i.completed).length
)
