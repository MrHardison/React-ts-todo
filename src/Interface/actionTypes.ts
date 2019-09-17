/* eslint-disable prettier/prettier */
import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM, TOGGLE_ALL } from '../store/constants'
import { Iitem, IeditedItem } from '.'

export type listActions = {
  type: typeof ADD_ITEM
  payload: Iitem
} | {
  type: typeof DELETE_ITEM
  payload: Iitem
} | {
  type: typeof TOGGLE_ITEM
  payload: Iitem
} | {
  type: typeof TOGGLE_ALL
  payload: boolean
} | {
  type: typeof TOGGLE_EDIT
  payload: IeditedItem
} | {
  type: typeof EDIT_ITEM
  payload: IeditedItem
}
