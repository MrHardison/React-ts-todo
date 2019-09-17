import { combineReducers } from 'redux'
import listReducer from './listReducer'
import filterReducer from './filterReducer'

export const rootReducer = combineReducers({ listReducer, filterReducer })
