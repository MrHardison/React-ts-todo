import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM } from '../constants'
import { Iitem, IeditedItem } from '../../Interface'

export const actionAddItem = (item: Iitem) => ({
  type: ADD_ITEM,
  payload: item
})

export const actionDeleteItem = (item: Iitem) => ({
  type: DELETE_ITEM,
  payload: item
})

export const actionToggleItem = (item: Iitem) => ({
  type: TOGGLE_ITEM,
  payload: item
})

export const actionToggleEditItem = (item: IeditedItem) => ({
  type: TOGGLE_EDIT,
  payload: item
})

export const actionEditItem = (item: IeditedItem) => ({
  type: EDIT_ITEM,
  payload: item
})
