import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM, TOGGLE_ALL, CLEAR_COMPLETED } from '../constants'
import { Iitem, IeditedItem } from '../../Interface'
import { listActions } from '../../Interface/actionTypes'

export const actionAddItem = (payload: Iitem): listActions => ({
  type: ADD_ITEM,
  payload
})

export const actionDeleteItem = (payload: number): listActions => ({
  type: DELETE_ITEM,
  payload
})

export const actionClearCompleted = (): listActions => ({
  type: CLEAR_COMPLETED,
  payload: true
})

export const actionToggleItem = (id: number, completed: boolean): listActions => ({
  type: TOGGLE_ITEM,
  payload: { id, completed }
})

export const actionToggleAll = (payload: boolean): listActions => ({
  type: TOGGLE_ALL,
  payload
})

export const actionToggleEditItem = (id: number | null, title: string, priority: string): listActions => ({
  type: TOGGLE_EDIT,
  payload: { id, title, priority }
})

export const actionEditItem = (payload: IeditedItem): listActions => ({
  type: EDIT_ITEM,
  payload
})
