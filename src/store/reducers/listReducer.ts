import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM, TOGGLE_ALL } from '../constants'
import { IlistObj } from '../../Interface'
import { listActions } from '../../Interface/actionTypes'

const initialState: IlistObj = {
  list: [
    {
      id: 1,
      title: 'title1',
      completed: false
    },
    {
      id: 2,
      title: 'title2',
      completed: false
    },
    {
      id: 3,
      title: 'title3',
      completed: false
    }
  ],
  editedItem: {
    id: null,
    title: ''
  }
}

const listReducer = (state = initialState, action: listActions): IlistObj => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: [...state.list, action.payload] }

    case DELETE_ITEM:
      return { ...state, list: state.list.filter(item => item !== action.payload) }

    case TOGGLE_ITEM:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            item.completed = action.payload.completed
          }
          return item
        })
      }

    case TOGGLE_EDIT:
      return {
        ...state,
        editedItem: { id: action.payload.id, title: action.payload.title }
      }

    case TOGGLE_ALL:
      return {
        ...state,
        list: state.list.map(i => {
          i.completed = action.payload
          return i
        })
      }

    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title
          }
          return item
        })
      }

    default:
      return state
  }
}

export default listReducer
