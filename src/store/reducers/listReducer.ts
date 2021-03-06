import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM, TOGGLE_ALL, CLEAR_COMPLETED } from '../constants'
import { IlistObj } from '../../Interface'
import { listActions } from '../../Interface/actionTypes'

const initialState: IlistObj = {
  list: [],
  editedItem: {
    id: null,
    title: '',
    priority: 'high'
  }
}

const listReducer = (state = initialState, action: listActions): IlistObj => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: [...state.list, action.payload] }

    case DELETE_ITEM:
      return { ...state, list: state.list.filter(item => item.id !== action.payload) }

    case CLEAR_COMPLETED:
      return { ...state, list: state.list.filter(item => !item.completed) }

    case TOGGLE_ITEM:
      return {
        ...state,
        list: state.list.map(item =>
          item.id === action.payload.id ? { ...item, completed: action.payload.completed } : item
        )
      }

    case TOGGLE_EDIT:
      return {
        ...state,
        editedItem: { id: action.payload.id, title: action.payload.title, priority: action.payload.priority }
      }

    case TOGGLE_ALL:
      return {
        ...state,
        list: state.list.map(item => ({ ...item, completed: action.payload }))
      }

    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map(item =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title, priority: action.payload.priority }
            : item
        )
      }

    default:
      return state
  }
}

export default listReducer
