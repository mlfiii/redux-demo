import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Animal from './Animal'
import Immutable from './Immutable'
import User from './User'

const reducers = combineReducers({ Animal, Immutable, User })
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default initialState => createStoreWithMiddleware(reducers, initialState)
