import { combineReducers } from 'redux'
import listReducer from './listReducer'
import filterReducer from './filterReducer'
import sortReducer from './sortReducer'

export const rootReducer = combineReducers({ listReducer, filterReducer, sortReducer })
