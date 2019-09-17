import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, TOGGLE_EDIT, EDIT_ITEM } from '../constants'
import { Iitem, IlistObj } from '../../Interface'

interface Iprops {
  type: string
  payload: Iitem
}

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

const listReducer = (state = initialState, { type, payload }: Iprops) => {
  switch (type) {
    case ADD_ITEM:
      return { ...state, list: [...state.list, payload] }

    case DELETE_ITEM:
      return { ...state, list: state.list.filter(item => item !== payload) }

    case TOGGLE_ITEM:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === payload.id) {
            item.completed = payload.completed
          }
          return item
        })
      }

    case TOGGLE_EDIT:
      return {
        ...state,
        editedItem: { id: payload.id, title: payload.title }
      }

    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === payload.id) {
            item.title = payload.title
          }
          return item
        })
      }

    default:
      return state
  }
}

export default listReducer
