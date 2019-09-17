export interface Iroot {
  listReducer: IlistObj
  filterReducer: IfiltersObj
}

export interface Iitem {
  id: number
  title: string
  completed: boolean
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
