import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM, TOGGLE_ALL } from '../constants'
import { Iitem, IeditedItem } from '../../Interface'
import { listActions } from '../../Interface/actionTypes'

export const actionAddItem = (item: Iitem): listActions => ({
  type: ADD_ITEM,
  payload: item
})

export const actionDeleteItem = (item: Iitem): listActions => ({
  type: DELETE_ITEM,
  payload: item
})

export const actionToggleItem = (item: Iitem): listActions => ({
  type: TOGGLE_ITEM,
  payload: item
})

export const actionToggleAll = (status: boolean): listActions => ({
  type: TOGGLE_ALL,
  payload: status
})

export const actionToggleEditItem = (item: IeditedItem): listActions => ({
  type: TOGGLE_EDIT,
  payload: item
})

export const actionEditItem = (item: IeditedItem): listActions => ({
  type: EDIT_ITEM,
  payload: item
})
