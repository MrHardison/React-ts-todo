/* eslint-disable prettier/prettier */
import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM, TOGGLE_ALL, CLEAR_COMPLETED } from '../store/constants'
import { Iitem, IeditedItem } from '.'

export type listActions = {
  type: typeof ADD_ITEM
  payload: Iitem
} | {
  type: typeof DELETE_ITEM
  payload: number
} | {
  type: typeof TOGGLE_ITEM
  payload: {id: number, completed: boolean}
} | {
  type: typeof TOGGLE_ALL
  payload: boolean
} | {
  type: typeof TOGGLE_EDIT
  payload: IeditedItem
} | {
  type: typeof EDIT_ITEM
  payload: IeditedItem
} | {
  type: typeof CLEAR_COMPLETED
  payload: boolean
}
