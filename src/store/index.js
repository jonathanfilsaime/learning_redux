import appReducer from './reducers'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

const updateLogs = store => next => action => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('users : ', store.getState().users)
    console.log('notes : ', store.getState().notes)
    result = next(action)

    let {users, notes} = store.getState()

    console.log('=================================')
    console.log('users : ', users)
    console.log('notes : ', notes)

    console.groupEnd()

    return result
}

export default (initialState = {}) => {
    return applyMiddleware(updateLogs, thunk)(createStore)(appReducer,initialState)
}
