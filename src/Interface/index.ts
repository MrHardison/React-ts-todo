export interface Iroot {
  listReducer: IlistObj
  filterReducer: IfiltersObj
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

export interface Ifilter {
  type: string
  active: boolean
}

export interface IfiltersObj {
  filtersList: Ifilter[]
}

export interface IfiltersReducer {
  filterReducer: IfiltersObj
}
