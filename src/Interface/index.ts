export interface Iroot {
  listReducer: IlistObj
  filterReducer: IfiltersObj
  sortReducer: IsortListObj
  completedCount: number
  fullListLength: number
}

export interface Iitem {
  id: number
  title: string
  completed: boolean
  priority: string
}

export interface IlistObj {
  list: Iitem[]
  editedItem: IeditedItem
}

export interface IlistReducer {
  listReducer: IlistObj
}

export interface IeditedItem {
  id: number | null
  title: string
  priority: string
}

export interface IfiltersObj {
  filtersList: string[]
  currentFilter: string
}

export interface Ifilters {
  filterReducer: IfiltersObj
  sortReducer: IsortListObj
}

export interface IsortListObj {
  sortTypes: string[]
  currentSortType: string
}
